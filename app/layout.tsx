import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TrendWave Dashboard",
  description: "AI monitoring and analytics",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
