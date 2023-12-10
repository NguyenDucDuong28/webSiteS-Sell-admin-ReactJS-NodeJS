import { create } from "zustand";

const useRegisterProductDetails = create((set) => ({
  products: [],
  loading: true,
  setProducts: (newProduct) => set({ products: newProduct }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useRegisterProductDetails;
