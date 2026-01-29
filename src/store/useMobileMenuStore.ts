import { create } from 'zustand';

export type MobileMenuType = 'categories' | 'user' | null;

interface MobileMenuState {
   mobileMenu: MobileMenuType;
   openMenu: (menu: MobileMenuType) => void;
   closeMenu: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
   mobileMenu: null,
   openMenu: (menu) => set({ mobileMenu: menu }),
   closeMenu: () => set({ mobileMenu: null }),
}));