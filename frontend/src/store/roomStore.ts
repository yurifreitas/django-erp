import { create } from "zustand";

interface Room {
  id: number;
  number: string;
  type: string;
  price: number;
  status: "Available" | "Occupied";
}

interface RoomStore {
  rooms: Room[];
  addRoom: (room: Room) => void;
}

export const useRoomStore = create<RoomStore>((set) => ({
  rooms: [
    { id: 1, number: "101", type: "Deluxe", price: 120, status: "Available" },
    { id: 2, number: "102", type: "Suite", price: 200, status: "Occupied" },
  ],
  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, room] })),
}));
