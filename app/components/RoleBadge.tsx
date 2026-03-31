import type { Role } from "@/app/lib/types";

const roleStyles: Record<Role, string> = {
  Duelist: "border-val-red text-val-red",
  Controller: "border-green-500 text-green-400",
  Initiator: "border-sky-400 text-sky-400",
  Sentinel: "border-yellow-400 text-yellow-400",
};

export default function RoleBadge({ role }: { role: Role }) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-xs font-medium ${roleStyles[role]}`}
    >
      {role}
    </span>
  );
}
