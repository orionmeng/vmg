import type { Composition } from "@/app/lib/types";

export default function CompositionCard({ comp }: { comp: Composition }) {
  return (
    <div className="rounded-lg border border-val-teal-light bg-val-teal-light/40 p-5 transition-colors hover:bg-val-teal-light/70">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-val-cream">{comp.name}</h3>
        <span className="rounded bg-val-red/20 px-2 py-0.5 text-xs font-medium text-val-red">
          {comp.map}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {comp.agents.map((agent, i) => (
          <span
            key={`${agent}-${i}`}
            className="rounded bg-val-teal px-2 py-1 text-sm text-val-cream-dark"
          >
            {agent}
          </span>
        ))}
      </div>

      <p className="mb-3 text-sm text-val-gray">{comp.description}</p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium text-green-400">Pros</span>
          <ul className="mt-1 list-inside list-disc text-val-cream-dark">
            {comp.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-medium text-val-red">Cons</span>
          <ul className="mt-1 list-inside list-disc text-val-cream-dark">
            {comp.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
