import type { Agent } from "@/app/lib/types";
import TierBadge from "./TierBadge";
import RoleBadge from "./RoleBadge";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-val-teal-light bg-val-teal-light/40 p-4 transition-colors hover:bg-val-teal-light/70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-val-teal-light text-lg font-bold text-val-cream-dark">
        {agent.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-val-cream">{agent.name}</span>
          <RoleBadge role={agent.role} />
        </div>
        <p className="mt-1 truncate text-sm text-val-gray">{agent.description}</p>
      </div>
      <TierBadge tier={agent.tier} />
    </div>
  );
}
