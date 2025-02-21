import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  signOut: () => set({ token: null })
}));
