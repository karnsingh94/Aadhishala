import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5010;
const allowedOrigins = [
  'http://127.0.0.1:8120',
  'http://localhost:8120',
  'http://127.0.0.1:8121',
  'http://localhost:8121',
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

function hasMailConfig() {
  return Boolean(
    process.env.ZOHO_MAIL &&
      process.env.ZOHO_APP_PASSWORD &&
      process.env.INQUIRY_TO &&
      !process.env.ZOHO_MAIL.includes('yourmail'),
  );
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };

    return replacements[character];
  });
}

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_MAIL,
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });
}

app.post('/api/inquiry', async (req, res) => {
  if (!hasMailConfig()) {
    return res.status(500).json({
      message:
        'Add ZOHO_MAIL, ZOHO_APP_PASSWORD, and INQUIRY_TO in .env, then restart npm run dev.',
    });
  }

  const { school, name, mobile, email, requirement, message } = req.body || {};

  if (!school || !name || !mobile || !requirement) {
    return res.status(400).json({
      message: 'Please fill school, name, mobile, and requirement.',
    });
  }

  try {
    const transporter = createTransporter();
    const html = `
      <h2>New Aadishala Demo Inquiry</h2>
      <p><strong>School:</strong> ${escapeHtml(school)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || 'Not provided')}</p>
      <p><strong>Requirement:</strong> ${escapeHtml(requirement)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(message || 'No message added.')}</p>
    `;

    await transporter.sendMail({
      from: `Aadishala Website <${process.env.ZOHO_MAIL}>`,
      to: process.env.INQUIRY_TO,
      replyTo: email || process.env.ZOHO_MAIL,
      subject: `Aadishala Demo Inquiry - ${school}`,
      html,
    });

    return res.json({ message: 'Inquiry sent successfully.' });
  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Inquiry could not be sent.',
    });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mailConfigured: hasMailConfig() });
});

app.listen(port, () => {
  console.log(`Mail server running on http://127.0.0.1:${port}`);
});
