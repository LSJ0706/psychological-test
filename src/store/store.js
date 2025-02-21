import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist((set) => ({
    userInfo: [{ token: null }, { userId: null }, { nickname: null }],
    userSignIn: (user) => set((state) => ({ userInfo: { ...state.userInfo, ...user } })),
    userSignOut: () => set({ userInfo: { token: null, userId: null, nickname: null } })
  }))
);
