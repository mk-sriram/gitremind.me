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
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 tracking-tight text-gray-800 antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
