import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import PatchNoteCard from "@/app/components/PatchNoteCard";
import { patchNotes } from "@/app/lib/patch-notes-data";

export const metadata: Metadata = {
  title: "Patch Notes",
  description: "Latest Valorant patch notes and game updates.",
};

export default function PatchNotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Patch Notes"
        description="Latest Valorant patch notes and game updates."
      />
      <div className="grid gap-4">
        {patchNotes.map((patch) => (
          <PatchNoteCard key={patch.id} patch={patch} />
        ))}
      </div>
    </div>
  );
}
