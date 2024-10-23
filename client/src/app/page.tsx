import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to PriceTracker</h1>
      <p className="text-xl mb-8">
        Track prices across multiple e-commerce platforms and save money on your
        purchases.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
