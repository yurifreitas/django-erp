import { create } from "zustand";

interface Task {
  id: number;
  room: string;
  status: "Pending" | "Completed";
  assignedTo: string;
}

interface HousekeepingStore {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const useHousekeepingStore = create<HousekeepingStore>((set) => ({
  tasks: [
    { id: 1, room: "101", status: "Pending", assignedTo: "Charlie" },
  ],
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
}));
