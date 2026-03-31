export type Tier = "S" | "A" | "B" | "C" | "D";
export type Role = "Duelist" | "Controller" | "Initiator" | "Sentinel";

export interface Agent {
  id: string;
  name: string;
  role: Role;
  tier: Tier;
  description: string;
}

export interface Composition {
  id: string;
  name: string;
  map: string;
  agents: string[];
  description: string;
  pros: string[];
  cons: string[];
}

export interface PatchNote {
  id: string;
  title: string;
  date: string;
  url: string;
  description: string;
}
