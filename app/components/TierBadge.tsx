import type { Tier } from "@/app/lib/types";

const tierColors: Record<Tier, string> = {
  S: "bg-val-red text-white",
  A: "bg-orange-500 text-white",
  B: "bg-yellow-500 text-black",
  C: "bg-sky-500 text-white",
  D: "bg-zinc-500 text-white",
};

export default function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded text-xs font-bold ${tierColors[tier]}`}
    >
      {tier}
    </span>
  );
}
