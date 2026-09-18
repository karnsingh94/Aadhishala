import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { demoHighlights } from '../data/siteData.js';

const initialForm = {
  school: '',
  name: '',
  mobile: '',
  email: '',
  requirement: '',
  message: '',
};

const requirements = ['ERP', 'LMS', 'Fee Management', 'Admissions CRM'];

async function readResponse(response) {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

function getInquiryEndpoints() {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

  return ['/api/inquiry', apiUrl ? `${apiUrl}/api/inquiry` : null].filter(Boolean);
}

async function sendInquiry(form) {
  let lastError;

  for (const endpoint of getInquiryEndpoints()) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await readResponse(response);

      if (response.ok) {
        return data;
      }

      lastError = new Error(
        data.message || `Request failed with status ${response.status}.`,
      );

      if (response.status !== 404) {
        break;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Inquiry could not be sent.');
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function updateForm(event) {
    const { name } = event.target;
    const value = name === 'mobile'
      ? event.target.value.replace(/\D/g, '').slice(0, 10)
      : event.target.value;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (status) {
      setStatus('');
    }

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }));
    }
  }

  function validateForm() {
    const nextErrors = {};
    const cleanForm = {
      school: form.school.trim(),
      name: form.name.trim(),
      mobile: form.mobile.trim(),
      email: form.email.trim(),
      requirement: form.requirement.trim(),
      message: form.message.trim(),
    };

    if (!cleanForm.school) {
      nextErrors.school = 'School name is required.';
    }

    if (!cleanForm.name) {
      nextErrors.name = 'Your name is required.';
    }

    if (!/^\d{10}$/.test(cleanForm.mobile)) {
      nextErrors.mobile = 'Enter a valid 10 digit mobile number.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanForm.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!cleanForm.requirement) {
      nextErrors.requirement = 'Please select a requirement.';
    }

    if (cleanForm.message && cleanForm.message.length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(nextErrors);
    return { isValid: Object.keys(nextErrors).length === 0, cleanForm };
  }

  async function submitInquiry(event) {
    event.preventDefault();
    const { isValid, cleanForm } = validateForm();

    if (!isValid) {
      setStatus('Please fix the highlighted fields.');
      return;
    }

    setIsLoading(true);
    setStatus('Sending inquiry...');

    try {
      const data = await sendInquiry(cleanForm);

      setStatus(data.message || 'Inquiry sent successfully.');
      setForm(initialForm);
    } catch (error) {
      setStatus(error.message || 'Inquiry could not be sent. Check mail setup.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <PageIntro
        title="Book a personalised school demo"
        text="Share your requirements and our team will help you choose the right modules."
      />

      <section className="page-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <h2 id="contact-form-heading" className="text-2xl font-extrabold text-school-950 sm:text-3xl lg:col-span-2">Contact Us</h2>
        <form className="school-card grid gap-4" onSubmit={submitInquiry} aria-labelledby="contact-form-heading">
          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            School name
            <input
              className="form-field"
              name="school"
              value={form.school}
              onChange={updateForm}
              placeholder="Enter school name"
              required
            />
            {errors.school ? <span className="text-xs font-bold text-red-600">{errors.school}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Your name
            <input
              className="form-field"
              name="name"
              value={form.name}
              onChange={updateForm}
              placeholder="Enter your name"
              required
            />
            {errors.name ? <span className="text-xs font-bold text-red-600">{errors.name}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Mobile number
            <input
              className="form-field"
              name="mobile"
              type="tel"
              inputMode="numeric"
              maxLength="10"
              pattern="[0-9]{10}"
              value={form.mobile}
              onChange={updateForm}
              placeholder="Enter mobile number"
              required
            />
            {errors.mobile ? <span className="text-xs font-bold text-red-600">{errors.mobile}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Email address
            <input
              className="form-field"
              name="email"
              type="email"
              value={form.email}
              onChange={updateForm}
              placeholder="Enter email address"
              required
            />
            {errors.email ? <span className="text-xs font-bold text-red-600">{errors.email}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Requirement
            <select
              className="form-field"
              name="requirement"
              value={form.requirement}
              onChange={updateForm}
              required
            >
              <option value="">Select requirement</option>
              {requirements.map((requirement) => (
                <option key={requirement}>{requirement}</option>
              ))}
            </select>
            {errors.requirement ? <span className="text-xs font-bold text-red-600">{errors.requirement}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-slate-700">
            Message
            <textarea
              className="form-field min-h-32"
              name="message"
              value={form.message}
              onChange={updateForm}
              placeholder="Tell us about your school"
              rows="4"
            />
            {errors.message ? <span className="text-xs font-bold text-red-600">{errors.message}</span> : null}
          </label>

          <button className="primary-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Inquiry'}
          </button>

          {status ? (
            <p className="text-sm font-black text-school-700">{status}</p>
          ) : null}
        </form>

        <aside className="school-card">
          <h3 className="heading-sm">What you get in demo</h3>
          <p className="body-copy mt-3">
            Module walkthrough, pricing guidance, onboarding plan, and a
            practical growth roadmap for your school.
          </p>

          <div className="mt-6 grid gap-4">
            {demoHighlights.map(({ title, Icon }) => (
              <div
                key={title}
                className="flex items-center gap-3 font-black text-school-950"
              >
                <Icon className="h-6 w-6 text-school-700" />
                {title}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
