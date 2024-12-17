import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cookbook App",
  description: "Manage recipes with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
