import { create } from 'zustand';
import { Job } from './types';

interface NavigationStore {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));

interface User {
    username: string;
    email: string;
}

interface UserStore {
    user: User | null;
    userLoading: boolean;
    setUser: (user: User | null) => void;
    setUserLoading: (userLoading: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    userLoading: true,
    setUser: (user: User | null) => set({ user }),
    setUserLoading: (loading: boolean) => set({ userLoading: loading }),
}));

interface JobsStore {
    jobs: Job[];
    totalJobs: number;
    numOfPages: number;
    page: number;
    setJobs: (jobs: Job[]) => void;
}

export const useJobsStore = create<JobsStore>((set) => ({
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    setJobs: (jobs: Job[]) => set({ jobs }),
}));
