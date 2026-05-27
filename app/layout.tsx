import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Meeting Assistant",
  description:
    "Analyze meeting transcripts to extract summaries, projects, features, and action items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
