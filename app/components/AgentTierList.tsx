"use client";

import { useState } from "react";
import type { Agent, Tier, Role } from "@/app/lib/types";
import AgentCard from "./AgentCard";

const tiers: Tier[] = ["S", "A", "B", "C", "D"];
const roles: Role[] = ["Duelist", "Controller", "Initiator", "Sentinel"];

export default function AgentTierList({ agents }: { agents: Agent[] }) {
  const [roleFilter, setRoleFilter] = useState<Role | "All">("All");

  const filtered =
    roleFilter === "All"
      ? agents
      : agents.filter((a) => a.role === roleFilter);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {(["All", ...roles] as const).map((role) => (
          <button
            key={role}
            onClick={() => setRoleFilter(role)}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              roleFilter === role
                ? "bg-val-red text-white"
                : "bg-val-teal-light text-val-cream-dark hover:text-val-cream"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {tiers.map((tier) => {
          const tierAgents = filtered.filter((a) => a.tier === tier);
          if (tierAgents.length === 0) return null;
          return (
            <section key={tier}>
              <h2 className="mb-3 text-xl font-bold text-val-cream">
                {tier} Tier
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {tierAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
