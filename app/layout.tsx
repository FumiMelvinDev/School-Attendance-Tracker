import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Attendance Tracker",
  description: "Attendance for your school.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="flex min-h-screen flex-col w-full">
          <Header />
          <main className="flex flex-col bg-background">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
