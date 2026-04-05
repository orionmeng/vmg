"use client";

import { useState } from "react";
import type { Composition } from "@/app/lib/types";
import CompositionCard from "./CompositionCard";

export default function CompositionList({ compositions }: { compositions: Composition[] }) {
  const maps = Array.from(new Set(compositions.map((c) => c.map))).sort();
  const [mapFilter, setMapFilter] = useState<string>("All");

  const filtered =
    mapFilter === "All"
      ? compositions
      : compositions.filter((c) => c.map === mapFilter);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {["All", ...maps].map((map) => (
          <button
            key={map}
            onClick={() => setMapFilter(map)}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              mapFilter === map
                ? "bg-val-red text-white"
                : "bg-val-teal-light text-val-cream-dark hover:text-val-cream"
            }`}
          >
            {map}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((comp) => (
          <CompositionCard key={comp.id} comp={comp} />
        ))}
      </div>
    </div>
  );
}
