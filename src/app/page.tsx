import Image from "next/image";
import Link from "next/link";
import Particles from "@/components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

export default async function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <nav className="my-10 sm:my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm duration-500 text-zinc-300 hover:text-zinc-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        <Image width={80} height={80} className="my-1 max-sm:w-12 animate-title duration-1000 cursor-default" src="/logo.png" alt="logo" />
        <h1 className="z-10 text-4xl font-semibold bg-white text-transparent uppercase duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">ARCADE</h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-10 sm:my-16 text-center animate-fade-in space-y-1">
          <h2 className="text-xs sm:text-sm md:text-lg text-zinc-300">The ultimate solution for your business needs</h2>
          <h2 className="text-xs sm:text-sm md:text-lg text-zinc-300">From 2021 we introduce our services to all industrial sectors (Manufacturing, Constructions, Maritime,…)</h2>
        </div>

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </main>
    </>
  );
}
