import { User } from 'firebase/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const USER_DATA = 'USER_DATA';

type UserStoreType = {
  currentUser: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
};

const getInitialUserState = () => {
  const user: User = JSON.parse(localStorage.getItem(USER_DATA)!) || null;
  return user;
};

const useUserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      currentUser: getInitialUserState(),
      signIn: (user) => set({ currentUser: user }),
      signOut: () => set({ currentUser: null }),
    }),
    {
      name: USER_DATA,
    }
  )
);
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('USER STORE', useUserStore);
}

export default useUserStore;
