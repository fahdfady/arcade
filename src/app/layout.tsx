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
        className={`bg-black text-white ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
          <main className="relative min-h-screen bg-gradient-to-tl from-black via-[#805f2442] to-black">{children}</main></body>
    </html>
  );
}
