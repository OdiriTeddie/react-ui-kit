import { DataGrid } from "./DataGrid";
import type { Column, DataGridProps } from "./DataGrid";

type User = {
  id: number;
  name: string;
  role: string;
  status: "Active" | "Invited";
};

const columns: Column<User>[] = [
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
  {
    key: "status",
    header: "Status",
    render: (user) => (
      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        {user.status}
      </span>
    ),
  },
];

const users: User[] = [
  { id: 1, name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { id: 2, name: "Grace Hopper", role: "Admin", status: "Invited" },
];

export function DataGridExample() {
  return (
    <DataGrid columns={columns} data={users} emptyMessage="No users found." />
  );
}

export { DataGrid };
export type { Column, DataGridProps };
