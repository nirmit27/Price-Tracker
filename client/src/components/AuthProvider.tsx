"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

const AuthContext = createContext<{
  user: User | null;
  signOut: () => Promise<void>;
}>({
  user: null,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
