"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from "./AuthProvider";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">PriceTracker</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ThemeToggle />
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" className="ml-4">
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleSignOut} className="ml-4">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="outline" className="ml-4">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="ml-4">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
