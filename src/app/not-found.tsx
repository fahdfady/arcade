import Link from "next/link"

export default function Component() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4 text-center">
            <img
                alt="Arcade Logo"
                className="aspect-[2/1] overflow-hidden object-contain object-center"
                width={130}
                height={130}
                src="/logo.png"
            />
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">404 - Page Not Found</h1>
            </div>
            <Link
                className="inline-flex h-10 items-center text-sm font-medium shadow-sm gap-1.5 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 "
                href="/"
            >Go to Home</Link>
        </main>
    )
}

