import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Arena - Test & Compare AI Developer Tools",
  description: "A comprehensive arena for developers to test, compare, and evaluate AI coding tools and assistants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
