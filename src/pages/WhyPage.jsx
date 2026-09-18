import { CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/PageIntro.jsx';
import { Cta } from '../components/SharedSections.jsx';
import { whyItems } from '../data/siteData.js';

export default function WhyPage() {
  return (
    <main>
      <PageIntro
        title="Why schools choose Aadishala"
        text="A premium, practical platform for owners, principals, accountants, teachers, parents, and students."
      />

      <section className="page-section grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {whyItems.map((item) => (
          <article key={item.title} className="school-card">
            <CheckCircle2 className="feature-icon" />
            <h3 className="heading-sm">{item.title}</h3>
            <p className="body-copy mt-3">{item.text}</p>
          </article>
        ))}
      </section>

      <Cta />
    </main>
  );
}
