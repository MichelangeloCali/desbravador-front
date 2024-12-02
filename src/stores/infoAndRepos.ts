import { create } from 'zustand';

import { Repo } from '@/types/models/Repos';
import { User } from '@/types/models/User';

type UserStore = {
  userData: User | null;
  reposData: Repo[] | null;
  setUserData: (data: User) => void;
  setReposData: (data: Repo[]) => void;
  clearData: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  reposData: null,
  setUserData: (data) => set({ userData: data }),
  setReposData: (data) => set({ reposData: data }),
  clearData: () => set({ userData: null, reposData: null }),
}));
