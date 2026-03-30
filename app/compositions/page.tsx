import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Compositions",
  description:
    "Best team compositions for each Valorant map in the current meta.",
};

export default function CompositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Meta Compositions</h1>
      <p className="text-val-cream-dark">
        Best team compositions for each Valorant map in the current meta.
      </p>
    </div>
  );
}
