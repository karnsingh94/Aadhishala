import PageIntro from '../components/PageIntro.jsx';
import {
  PopularSolutions,
  SolutionBlocks,
} from '../components/SharedSections.jsx';

export default function SolutionsPage() {
  return (
    <main>
      <PageIntro
        title="Solutions built for every school workflow"
        text="Choose the modules you need today and expand as your institution grows."
      />
      <SolutionBlocks />
      <PopularSolutions />
    </main>
  );
}
