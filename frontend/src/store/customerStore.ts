import { create } from "zustand";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface CustomerStore {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customers: [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890" },
  ],
  addCustomer: (customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),
}));
