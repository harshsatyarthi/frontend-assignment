import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import type { DataTableProps, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Harsh", email: "harsh@example.com", age: 23 },
  { id: 2, name: "Aditi", email: "aditi@example.com", age: 27 },
  { id: 3, name: "Ravi", email: "ravi@example.com", age: 21 },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
