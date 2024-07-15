import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '../utils/supabase/supabase-client';

interface AuthStoreState {
  session: Session | null;
  setUser: (user: User | null) => void;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthStoreState>()((set) => ({
  session: null,
  setUser: (session) => ({ session }),
  signUp: async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    set({ session: data.session });
  },
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ session: data.session });
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null });
  },
}));

supabase.auth.onAuthStateChange(
  (event: AuthChangeEvent, session: Session | null) => {
    if (event === 'SIGNED_IN') {
      useAuthStore.setState({
        session,
      });
    } else if (event === 'SIGNED_OUT') {
      useAuthStore.setState({
        session: null,
      });
    }
  }
);

export default useAuthStore;
