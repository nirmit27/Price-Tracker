import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              {/* <Footer /> */}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
