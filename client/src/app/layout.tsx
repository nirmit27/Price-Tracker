import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PriceTracker",
  description: "Track prices across multiple e-commerce platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
