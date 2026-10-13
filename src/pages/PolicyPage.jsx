import PageIntro from '../components/PageIntro.jsx';
import { policyPages } from '../data/policyData.js';

function PolicyBlock({ block }) {
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'email') {
    return (
      <p>
        <a className="font-bold text-school-700 underline underline-offset-4 hover:text-school-950" href={`mailto:${block.address}`}>
          {block.address}
        </a>
      </p>
    );
  }

  return <p>{block.text}</p>;
}

export default function PolicyPage({ path }) {
  const policy = policyPages[path];

  if (!policy) return null;

  return (
    <main>
      <PageIntro title={policy.title} text={policy.intro} />

      <article className="policy-content">
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-2 rounded-2xl bg-school-50 p-5 text-sm font-bold text-school-950">
          <p>Effective Date: 01/08/2026</p>
          <p>Last Updated: 01/09/2026</p>
        </div>

        {policy.sections.map((section) => (
          <section className="policy-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.blocks.map((block, index) => (
              <PolicyBlock block={block} key={`${section.heading}-${index}`} />
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
