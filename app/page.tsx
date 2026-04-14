import Link from "next/link";
import { patchNotes } from "@/app/lib/patch-notes-data";
import PatchNoteCard from "@/app/components/PatchNoteCard";

export default function Home() {
  const recentPatches = patchNotes.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero */}
      <section className="mb-16 flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="text-val-red">V</span>alo
          <span className="text-val-red">M</span>eta
          <span className="text-val-red">G</span>uide
        </h1>
        <p className="max-w-lg text-lg text-val-cream-dark">
          Intel so good it should be classified.
        </p>
        <div className="flex gap-3">
          <Link
            href="/agents"
            className="rounded border border-val-cream-dark px-5 py-2.5 text-sm font-medium text-val-cream-dark transition-colors hover:bg-val-teal-light hover:text-val-cream"
          >
            View Agents
          </Link>
          <Link
            href="/compositions"
            className="rounded border border-val-cream-dark px-5 py-2.5 text-sm font-medium text-val-cream-dark transition-colors hover:bg-val-teal-light hover:text-val-cream"
          >
            View Compositions
          </Link>
        </div>
      </section>

      {/* Recent Patch Notes */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Patch Notes</h2>
          <Link
            href="/patch-notes"
            className="text-sm text-val-red hover:text-val-red-dark"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-4">
          {recentPatches.map((patch) => (
            <PatchNoteCard key={patch.id} patch={patch} />
          ))}
        </div>
      </section>
    </div>
  );
}
