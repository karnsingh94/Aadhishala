import { GraduationCap } from 'lucide-react';

export default function PageIntro({ title, text }) {
  return (
    <section className="bg-gradient-to-br from-white to-school-50 px-5 py-16 sm:px-8 lg:px-[6vw] lg:py-20">
      <span className="eyebrow">
        <GraduationCap size={18} />
        Aadishala
      </span>

      <h1 className="heading-xl">{title}</h1>
      <p className="body-copy mt-5 max-w-3xl">{text}</p>
    </section>
  );
}
