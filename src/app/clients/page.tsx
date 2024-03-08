import Navigation from "@/components/Navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function Clients() {
    return (
        <>
            <Navigation />
            <main className="relative pb-16">
                <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                    <div
                        aria-label="clients"
                        role="list"
                        className="grid grid-cols-4 gap-x-2 gap-y-1 max-md:grid-cols-4 max-sm:grid-cols-2">
                        <Card
                            aria-label="Client"
                            role="listitem"
                            className="shadow-md group animate-slide-in-left hover:bg-[#ffefbf] focus:bg-[#f8dd98] hover:border-yellow-700 focus:border-yellow-900 hover:shadow-lg focus:shadow-xl transition duration-300 ease-in-out"
                        >
                            <CardContent className="p-1 flex flex-col justify-evenly items-center text-center">
                                <div className="max-w-full h-[120px] max-lg:h-[100px] max-sm:h-[80px] relative my-1">
                                    <Image
                                        src={"" || "/placeholderlogo.png"}
                                        width={120}
                                        height={120}
                                        alt="Company Logo"
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                                <div className="w-full mt-1 space-y-2">
                                    <CardTitle className="h-fit font-bold">EPP</CardTitle>
                                    <CardDescription className="font-semibold leading-tight">Egyptian Polypropylene and Polypropylene</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main >
        </>
    )
}