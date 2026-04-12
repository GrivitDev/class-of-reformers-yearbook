import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Year Book Form",
  description: "College on the Rock - Class of Reformers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}