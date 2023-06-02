import { create } from 'zustand';

interface User {
    username: string;
    email: string;
}

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
}));

interface NavigationStore {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));
