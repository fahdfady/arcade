import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../public/global.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcade",
  description: 'trading, construction, and supplies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>{children}</body>
    </html>
  );
}
