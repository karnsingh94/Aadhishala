import {
  Cta,
  Hero,
  Metrics,
  PopularSolutions,
  Recognition,
  SolutionBlocks,
  Trusted,
  WhyPreview,
} from '../components/SharedSections.jsx';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Metrics />
      <Trusted />
      <Recognition />
      <SolutionBlocks />
      <WhyPreview />
      <PopularSolutions />
      <Cta />
    </main>
  );
}
