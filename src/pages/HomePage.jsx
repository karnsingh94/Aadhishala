import {
  Cta,
  Hero,
  Metrics,
  PopularSolutions,
  BankingPartners,
  // Recognition,
  SchoolPartners,
  SolutionBlocks,
  // Trusted,
  WhyPreview,
} from '../components/SharedSections.jsx';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Metrics />
      {/* <Trusted /> */}
      <SchoolPartners />
      {/* <Recognition /> */}
      <BankingPartners />
      <SolutionBlocks />
      <WhyPreview />
      <PopularSolutions />
      <Cta />
    </main>
  );
}
