import { Award, Rocket, ShieldCheck, Smartphone, Star } from 'lucide-react';
import {
  metrics,
  onboardingSteps,
  popularSolutions,
  recognitions,
  schools,
  solutions,
} from '../data/siteData.js';
import { navigate } from '../utils.js';

export function Hero() {
  return (
    <section className="page-section grid min-h-[600px] items-center gap-10 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <span className="eyebrow">
          <Rocket size={18} />
          Premium School Platform
        </span>

        <h1 className="heading-xl">
          The Complete Platform for Educational Excellence
        </h1>

        <p className="body-copy mt-6 max-w-2xl text-lg sm:text-xl">
          Run ERP, learning, admissions, payments, communication, and parent
          engagement from one polished school operating system.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className="primary-button"
            type="button"
            onClick={() => navigate('/contact')}
          >
            Book Demo
          </button>

          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate('/solutions')}
          >
            Explore Modules
          </button>
        </div>
      </div>

      <div className="relative flex min-h-[420px] flex-col gap-5 overflow-hidden rounded-[28px] bg-gradient-to-br from-school-950 via-school-700 to-school-600 p-5 sm:p-7 shadow-school">
        <div className="grid gap-5 rounded-[24px] border border-white/25 bg-white/15 p-6 text-white sm:grid-cols-2">
          <div>
            <span className="block font-bold text-blue-100">Today Collection</span>
            <strong className="font-heading text-4xl font-black">Rs. 8.4L</strong>
          </div>

          <div>
            <span className="block font-bold text-blue-100">Attendance</span>
            <strong className="font-heading text-4xl font-black">94%</strong>
          </div>
        </div>

        <div className="self-start inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-black text-school-950 shadow-school">
          <Smartphone className="text-school-700" />
          Parent App Live
        </div>

        <div className="self-end inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-black text-school-950 shadow-school">
          <ShieldCheck className="text-school-700" />
          Secure Records
        </div>

        <div className="mt-auto grid gap-3">
          <span className="h-3 rounded-full bg-white/25" />
          <span className="h-3 w-8/12 rounded-full bg-white/25" />
          <span className="h-3 w-10/12 rounded-full bg-white/25" />
          <span className="h-3 w-6/12 rounded-full bg-white/25" />
        </div>
      </div>
    </section>
  );
}

export function Metrics() {
  return (
    <section className="grid border-y border-school-100 bg-school-100 sm:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white px-5 py-8 text-center">
          <strong className="block font-heading text-4xl font-black text-school-700 lg:text-5xl">
            {metric.value}
          </strong>
          <span className="mt-2 block font-extrabold text-slate-900">
            {metric.label}
          </span>
        </div>
      ))}
    </section>
  );
}

export function Trusted() {
  return (
    <section className="bg-slate-50 px-5 py-12 text-center sm:px-8 lg:px-[6vw]">
      <p className="text-sm font-black uppercase text-slate-900">
        Trusted by growing institutions and school teams
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {schools.map((school) => (
          <span
            key={school}
            className="rounded-full border border-school-100 bg-white px-5 py-3 font-black text-school-950"
          >
            {school}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section className="page-section">
      <div className="section-title">
        <span className="eyebrow">
          <Award size={18} />
          Recognition
        </span>

        <h2 className="heading-lg">
          Backed by credible education and startup ecosystems
        </h2>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {recognitions.map((item) => (
          <article key={item.title} className="school-card">
            <Star className="feature-icon" />
            <h3 className="heading-sm">{item.title}</h3>
            <p className="body-copy mt-3">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SolutionBlocks() {
  return (
    <section className="page-section grid gap-6 lg:grid-cols-3">
      {solutions.map(({ title, text, Icon }) => (
        <article key={title} className="school-card">
          <Icon className="feature-icon" />
          <h3 className="heading-sm">{title}</h3>
          <p className="body-copy mt-3">{text}</p>

          <button
            className="mt-5 rounded-xl bg-school-50 px-4 py-3 font-black text-school-700 transition hover:bg-school-100"
            type="button"
            onClick={() => navigate('/contact')}
          >
            Request demo
          </button>
        </article>
      ))}
    </section>
  );
}

export function PopularSolutions() {
  return (
    <section className="page-section">
      <div className="section-title">
        <span className="eyebrow">Modules</span>
        <h2 className="heading-lg">Popular school management tools</h2>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {popularSolutions.map(({ title, text, Icon }) => (
          <article key={title} className="school-card">
            <Icon className="feature-icon" />
            <h3 className="heading-sm">{title}</h3>
            <p className="body-copy mt-3">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="mx-5 mb-16 rounded-[28px] bg-gradient-to-br from-school-950 to-school-700 px-6 py-12 text-center text-white sm:mx-8 lg:mx-[6vw] lg:px-12">
      <h2 className="font-heading text-3xl font-black text-white
       leading-tight sm:text-5xl">
        Ready to modernise your school operations?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
        Launch ERP, LMS, payments, and communication with one connected
        platform.
      </p>

      <button
        className="mt-8 inline-grid min-h-14 place-items-center rounded-2xl bg-white px-6 font-black text-school-700 transition hover:-translate-y-0.5"
        type="button"
        onClick={() => navigate('/contact')}
      >
        Get Started
      </button>
    </section>
  );
}

export function WhyPreview() {
  return (
    <section className="page-section grid items-center gap-10 bg-gradient-to-br from-slate-50 to-school-50 lg:grid-cols-2">
      <div>
        <span className="eyebrow">
          <ShieldCheck size={18} />
          Why It Works
        </span>

        <h2 className="heading-lg">
          Designed for real schools, not just pretty dashboards
        </h2>

        <p className="body-copy mt-5 max-w-2xl">
          Keep owners, principals, accounts teams, teachers, parents, and
          students connected with the right information at the right time.
        </p>

        <button
          className="secondary-button mt-7"
          type="button"
          onClick={() => navigate('/why')}
        >
          See benefits
        </button>
      </div>

      <div className="grid gap-4">
        {onboardingSteps.map((step, index) => (
          <span
            key={step.title}
            className="rounded-2xl border border-school-100 bg-white px-6 py-5 font-black text-school-950 shadow-school"
          >
            {index + 1}. {step.title}
          </span>
        ))}
      </div>
    </section>
  );
}
