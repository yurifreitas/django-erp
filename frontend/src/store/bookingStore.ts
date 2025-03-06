import { create } from "zustand";

interface Booking {
  id: number;
  customer: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

interface BookingStore {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  bookings: [
    { id: 1, customer: "John Doe", room: "101", checkIn: "2025-03-07", checkOut: "2025-03-10", status: "Confirmed" },
  ],
  addBooking: (booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),
}));
