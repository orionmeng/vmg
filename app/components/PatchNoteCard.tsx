import type { PatchNote } from "@/app/lib/types";

export default function PatchNoteCard({ patch }: { patch: PatchNote }) {
  return (
    <a
      href={patch.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-val-teal-light bg-val-teal-light/40 p-5 transition-colors hover:bg-val-teal-light/70"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold text-val-cream">{patch.title}</h3>
        <time className="text-xs text-val-gray">{patch.date}</time>
      </div>
      <p className="text-sm text-val-cream-dark">{patch.description}</p>
    </a>
  );
}
