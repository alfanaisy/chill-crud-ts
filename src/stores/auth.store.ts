import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '../utils/supabase/supabase-client';

interface AuthStoreState {
  session: Session | null;
  setSession: (session: Session | null) => void;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  handleAuthChange: (event: AuthChangeEvent, session: Session | null) => void;
  init: () => void;
}

const useAuthStore = create<AuthStoreState>()((set) => ({
  session: null,

  setSession: (session) => set({ session }),

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

  signInWithGoogle: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/oauth/callback`,
      },
    });
    if (error) throw error;
    const { data } = await supabase.auth.getSession();
    if (!error && data.session) {
      useAuthStore.getState().handleAuthChange('SIGNED_IN', data.session);
    }
  },

  handleAuthChange: (event, session) => {
    if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
      set({ session });
    } else if (event === 'SIGNED_OUT') {
      set({ session: null });
    }
  },

  init: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    const existingSession = data.session;
    if (existingSession) {
      set({ session: existingSession });
    }
  },
}));

supabase.auth.onAuthStateChange((event, session) => {
  useAuthStore.getState().handleAuthChange(event, session);
});

useAuthStore.getState().init();

export default useAuthStore;
