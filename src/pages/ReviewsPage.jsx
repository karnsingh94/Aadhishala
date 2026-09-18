import PageIntro from '../components/PageIntro.jsx';
import { reviews } from '../data/siteData.js';

export default function ReviewsPage() {
  return (
    <main>
      <PageIntro
        title="Loved by educators and parents"
        text="Built for the people who use school software every day."
      />

      <section className="page-section grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reviews.slice(0, 4).map((review) => (
          <article key={review.name} className="school-card">
            <p className="body-copy">"{review.text}"</p>
            <strong className="mt-5 block text-slate-950">{review.name}</strong>
          </article>
        ))}
      </section>

      <section className="mx-5 mb-16 grid gap-6 rounded-[28px] bg-gradient-to-br from-school-950 to-school-700 p-7 text-white sm:mx-8 lg:mx-[6vw] lg:grid-cols-2 lg:p-12">
        {reviews.slice(3).map((review) => (
          <article key={review.name}>
            <p className="text-lg leading-8 text-blue-100">"{review.text}"</p>
            <strong className="mt-5 block">{review.name}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
