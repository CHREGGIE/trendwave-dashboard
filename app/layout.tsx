import "./globals.css";

export const metadata = {
  title: "TrendWave",
  description: "AI Visibility Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
