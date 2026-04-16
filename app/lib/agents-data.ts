import type { Agent } from "./types";

const iconUrl = (uuid: string) =>
  `https://media.valorant-api.com/agents/${uuid}/displayicon.png`;

export const agents: Agent[] = [
  // S Tier
  { id: "waylay", name: "Waylay", role: "Duelist", tier: "S", description: "", iconUrl: iconUrl("df1cb487-4902-002e-5c17-d28e83e78588") },
  { id: "neon", name: "Neon", role: "Duelist", tier: "S", description: "", iconUrl: iconUrl("bb2a4828-46eb-8cd1-e765-15848195d751") },
  { id: "sova", name: "Sova", role: "Initiator", tier: "S", description: "", iconUrl: iconUrl("320b2a48-4d9b-a075-30f1-1f93a9b638fa") },
  { id: "jett", name: "Jett", role: "Duelist", tier: "S", description: "", iconUrl: iconUrl("add6443a-41bd-e414-f6ad-e58d267f4e95") },
  { id: "chamber", name: "Chamber", role: "Sentinel", tier: "S", description: "", iconUrl: iconUrl("22697a3d-45bf-8dd7-4fec-84a9e28c69d7") },

  // A Tier
  { id: "omen", name: "Omen", role: "Controller", tier: "A", description: "", iconUrl: iconUrl("8e253930-4c05-31dd-1b6c-968525494517") },
  { id: "fade", name: "Fade", role: "Initiator", tier: "A", description: "", iconUrl: iconUrl("dade69b4-4f5a-8528-247b-219e5a1facd6") },
  { id: "skye", name: "Skye", role: "Initiator", tier: "A", description: "", iconUrl: iconUrl("6f2a04ca-43e0-be17-7f36-b3908627744d") },
  { id: "raze", name: "Raze", role: "Duelist", tier: "A", description: "", iconUrl: iconUrl("f94c3b30-42be-e959-889c-5aa313dba261") },
  { id: "miks", name: "Miks", role: "Initiator", tier: "A", description: "", iconUrl: iconUrl("7c8a4701-4de6-9355-b254-e09bc2a34b72") },
  { id: "clove", name: "Clove", role: "Controller", tier: "A", description: "", iconUrl: iconUrl("1dbf2edd-4729-0984-3115-daa5eed44993") },

  // B Tier
  { id: "reyna", name: "Reyna", role: "Duelist", tier: "B", description: "", iconUrl: iconUrl("a3bfb853-43b2-7238-a4f1-ad90e9e46bcc") },
  { id: "astra", name: "Astra", role: "Controller", tier: "B", description: "", iconUrl: iconUrl("41fb69c1-4189-7b37-f117-bcaf1e96f1bf") },
  { id: "kayo", name: "KAY/O", role: "Initiator", tier: "B", description: "", iconUrl: iconUrl("601dbbe7-43ce-be57-2a40-4abd24953621") },
  { id: "cypher", name: "Cypher", role: "Sentinel", tier: "B", description: "", iconUrl: iconUrl("117ed9e3-49f3-6512-3ccf-0cada7e3823b") },
  { id: "harbor", name: "Harbor", role: "Controller", tier: "B", description: "", iconUrl: iconUrl("95b78ed7-4637-86d9-7e41-71ba8c293152") },
  { id: "tejo", name: "Tejo", role: "Initiator", tier: "B", description: "", iconUrl: iconUrl("b444168c-4e35-8076-db47-ef9bf368f384") },
  { id: "iso", name: "Iso", role: "Duelist", tier: "B", description: "", iconUrl: iconUrl("0e38b510-41a8-5780-5e8f-568b2a4f2d6c") },
  { id: "brimstone", name: "Brimstone", role: "Controller", tier: "B", description: "", iconUrl: iconUrl("9f0d8ba9-4140-b941-57d3-a7ad57c6b417") },
  { id: "killjoy", name: "Killjoy", role: "Sentinel", tier: "B", description: "", iconUrl: iconUrl("1e58de9c-4950-5125-93e9-a0aee9f98746") },

  // C Tier
  { id: "phoenix", name: "Phoenix", role: "Duelist", tier: "C", description: "", iconUrl: iconUrl("eb93336a-449b-9c1b-0a54-a891f7921d69") },
  { id: "breach", name: "Breach", role: "Initiator", tier: "C", description: "", iconUrl: iconUrl("5f8d3a7f-467b-97f3-062c-13acf203c006") },
  { id: "veto", name: "Veto", role: "Sentinel", tier: "C", description: "", iconUrl: iconUrl("92eeef5d-43b5-1d4a-8d03-b3927a09034b") },
  { id: "vyse", name: "Vyse", role: "Sentinel", tier: "C", description: "", iconUrl: iconUrl("efba5359-4016-a1e5-7626-b1ae76895940") },
  { id: "sage", name: "Sage", role: "Sentinel", tier: "C", description: "", iconUrl: iconUrl("569fdd95-4d10-43ab-ca70-79becc718b46") },
  { id: "viper", name: "Viper", role: "Controller", tier: "C", description: "", iconUrl: iconUrl("707eab51-4836-f488-046a-cda6bf494859") },

  // D Tier
  { id: "yoru", name: "Yoru", role: "Duelist", tier: "D", description: "", iconUrl: iconUrl("7f94d92c-4234-0a36-9646-3a87eb8b5c89") },
  { id: "deadlock", name: "Deadlock", role: "Sentinel", tier: "D", description: "", iconUrl: iconUrl("cc8b64c8-4b25-4ff9-6e7f-37b4da43d235") },
  { id: "gekko", name: "Gekko", role: "Initiator", tier: "D", description: "", iconUrl: iconUrl("e370fa57-4757-3604-3648-499e1f642d3f") },
];
