# React UI Kit

Enterprise-ready React components for teams building internal tools, admin panels, dashboards, and data-heavy products.

The project is starting with a typed `DataGrid` component and will grow into a broader set of reusable UI primitives and composed business components.

## Status

This package is early-stage. The public API may change while the first components are being shaped.

## Goals

- TypeScript-first React components.
- Practical defaults for enterprise applications.
- Composable APIs instead of locked-in page templates.
- Accessible, predictable markup.
- Styling that works well with Tailwind CSS.
- Small, focused components that can be adopted one at a time.

## Installation

```bash
pnpm add react-ui-kit
```

React is a peer dependency, so your app should already provide `react` and `react-dom`.

## Usage

```tsx
import { DataGrid, type Column } from "react-ui-kit";

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
    render: (user) => <strong>{user.status}</strong>,
  },
];

const users: User[] = [
  { id: 1, name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { id: 2, name: "Grace Hopper", role: "Admin", status: "Invited" },
];

export function UsersTable() {
  return (
    <DataGrid
      columns={columns}
      data={users}
      emptyMessage="No users found."
    />
  );
}
```

## DataGrid API

### `DataGrid<T>`

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `Column<T>[]` | Yes | Column definitions for the table. |
| `data` | `T[]` | Yes | Rows rendered by the grid. |
| `loading` | `boolean` | No | Displays a loading state when true. |
| `emptyMessage` | `string` | No | Message shown when `data` is empty. |

### `Column<T>`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `keyof T \| string` | Yes | Field used to read the row value and key the cell. |
| `header` | `string` | Yes | Text rendered in the column header. |
| `render` | `(row: T) => ReactNode` | No | Custom cell renderer for derived or formatted values. |

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the playground app:

```bash
pnpm dev
```

Type-check the app:

```bash
pnpm typecheck
```

Run lint:

```bash
pnpm lint
```

Build the package:

```bash
pnpm build
```

## Project Structure

```text
src/
  components/
    data-grid/
      DataGrid.tsx
      index.tsx
  index.ts
```

- `src/index.ts` is the library entrypoint.
- `src/components/**` contains reusable package components.
- `src/App.tsx` is only the local playground/demo surface.

## Roadmap

- DataGrid sorting, selection, pagination, and column alignment.
- Form controls for enterprise workflows.
- Navigation, tabs, modals, and command surfaces.
- Dashboard and data-display components.
- Stronger accessibility coverage and interaction tests.

## Contributing

Contributions are welcome. Before opening a pull request, run:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

For larger changes, open an issue first so the API direction can be discussed.

## License

MIT
