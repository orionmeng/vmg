import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import CompositionList from "@/app/components/CompositionList";
import { compositions } from "@/app/lib/compositions-data";

export const metadata: Metadata = {
  title: "Meta Compositions",
  description:
    "Best team compositions for each Valorant map in the current meta.",
};

export default function CompositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Meta Compositions"
        description="Best team compositions for each Valorant map in the current meta."
      />
      <CompositionList compositions={compositions} />
    </div>
  );
}
