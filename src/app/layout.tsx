import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitRemind",
  description: "Never forget about a project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
