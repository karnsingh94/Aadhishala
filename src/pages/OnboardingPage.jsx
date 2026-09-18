import PageIntro from '../components/PageIntro.jsx';
import { Cta } from '../components/SharedSections.jsx';
import { onboardingSteps } from '../data/siteData.js';

export default function OnboardingPage() {
  return (
    <main>
      <PageIntro
        title="Go live without chaos"
        text="Simple setup, clear training, and support that helps your team move confidently."
      />

      <section className="page-section grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {onboardingSteps.map((step, index) => (
          <article key={step.title} className="school-card">
            <span className="font-heading text-4xl font-black text-school-700">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="heading-sm">{step.title}</h3>
            <p className="body-copy mt-3">{step.text}</p>
          </article>
        ))}
      </section>

      <Cta />
    </main>
  );
}
