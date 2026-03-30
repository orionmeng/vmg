import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents",
  description: "Tier list for all Valorant agents in the current meta.",
};

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Agents</h1>
      <p className="text-val-cream-dark">
        Tier list for all Valorant agents in the current meta.
      </p>
    </div>
  );
}
