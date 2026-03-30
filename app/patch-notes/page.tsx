import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patch Notes",
  description: "Latest Valorant patch notes and game updates.",
};

export default function PatchNotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Patch Notes</h1>
      <p className="text-val-cream-dark">
        Latest Valorant patch notes and game updates.
      </p>
    </div>
  );
}
