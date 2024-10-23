"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Your Dashboard</h1>
      <p className="text-xl mb-8">
        Welcome to your PriceTracker dashboard. Start tracking prices now!
      </p>
      {/* Add dashboard content here */}
      <Button onClick={handleSignOut} className="mt-4">
        Sign Out
      </Button>
    </div>
  );
}
