import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "What I love now",
  description: "A collection carefully curated by Cassandra Tang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>What I love now</title>
      <link rel="icon" href="/images/favicon.svg" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
