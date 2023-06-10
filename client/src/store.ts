import { create } from 'zustand';

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

interface NavigationStore {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    userLoading: true,
    setUser: (user: User | null) => set({ user }),
    setUserLoading: (loading: boolean) => set({ userLoading: loading }),
}));

export const useNavigationStore = create<NavigationStore>((set) => ({
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));
