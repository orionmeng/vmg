import Image from "next/image";
import type { Agent } from "@/app/lib/types";
import RoleBadge from "./RoleBadge";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-val-teal-light bg-val-teal-light/40 p-3 transition-colors hover:bg-val-teal-light/70">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-val-teal-light">
        <Image
          src={agent.iconUrl}
          alt={agent.name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 text-center">
        <div className="flex items-center justify-center gap-2">
          <RoleBadge role={agent.role} />
          <span className="font-semibold text-val-cream text-sm">{agent.name}</span>
        </div>
        <p className="mt-1 truncate text-xs text-val-gray">{agent.description}</p>
      </div>
    </div>
  );
}
