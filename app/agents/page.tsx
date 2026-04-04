import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import AgentTierList from "@/app/components/AgentTierList";
import { agents } from "@/app/lib/agents-data";

export const metadata: Metadata = {
  title: "Agents",
  description: "Tier list for all Valorant agents in the current meta.",
};

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader
        title="Agents"
        description="Tier list for all Valorant agents in the current meta."
      />
      <AgentTierList agents={agents} />
    </div>
  );
}
