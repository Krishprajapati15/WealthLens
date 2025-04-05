import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthLens",
  description: "one stop AI Fianance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-gradient-to-r from-[#A2D2DF] to-[#D4BEE4] py-10">
            <div className="container mx-auto px-4 text-center text-grey-600">
              <p>© 2024 Krish | WealthLens 💼💡. All Rights Reserved.</p>
              <p>
                Empowering your financial journey with clear insights and
                strategic solutions 📊💰.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
