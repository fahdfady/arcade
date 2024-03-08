import Navigation from "@/components/Navigation";
import { Anchor, Drill, Pickaxe, ScrollText, Truck } from "lucide-react";

export default function Services() {
    return (
        <>
            <Navigation />
            <main className="relative pb-16">
                <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Our Services</h1>
                        <p className="mt-4 text-zinc-400">At Arcade, we offer a range of services to help you achieve your goals and challenges.</p>
                    </div>
                    <hr className="border-none color-unset w-full h-px bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Contracting</h2>
                        <ScrollText className="w-8 h-8 sm:w-16 sm:h-16 text-zinc-100 my-3" />
                        <p className="text-zinc-400">Arcade has a contracting department that can keep your project on the appropriate timeline without any delays. We also have skilled laborers to complete the project, including plumbing, electrical, and carpentry. Arcade ensures that the status of the project is communicated throughout the build with the client and other pertinent parties to save the project plan.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Trading & Supplies</h2>
                        <Truck className="w-8 h-8 sm:w-16 sm:h-16 text-zinc-100 my-3" />
                        <p className="text-zinc-400">Arcade has a special department that can support you to get your requirements as per SPEC and with good prices & shortly time. Mainly dealing with steel products. Arcade is capable of supplying, fabricating, welding, and completing any project to perfection. We specialize in providing complete piping system products for the oil & gas industries as well as any water-related applications, including pipes, valves, fittings, and flanges. Arcade is also a distributor for office furniture factories in Egypt and can get your requirements as per your specification.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Man power supply</h2>
                        <Pickaxe className="w-8 h-8 sm:w-16 sm:h-16 text-zinc-100 my-3" />
                        <p className="text-zinc-400">Arcade has skilled personnel in all fields of services dedicated for shutdown and turn around activities. This competent staff helps in reducing the preparation time and optimization of the resource’s utilization. In addition to supplying all requirements of Manpower Supply, Arcade provides the best solutions through experienced staff with suitable fabrication tools and workshop to repair the static equipment and restore them in good condition in accordance with the most international common codes such as ASME code. Arcade is able to supply competent staff related to all petrochemical, oil & gas and fertilizers plants to perform all activities on the basis of appropriate qualification, upgrading, skills & experience to meet clients’ requirements.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Marine services</h2>
                        <Anchor className="w-8 h-8 sm:w-16 sm:h-16 text-zinc-100 my-3" />
                        <p className="text-zinc-400">Arcade has a special department for marine services and a boat with full special permits to work within the Suez Canal. The boat can be rented per transfer, per day, monthly or yearly, according to the agreement concluded and the nature and work duration.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Grinding & Painting</h2>
                        <Drill className="w-8 h-8 sm:w-16 sm:h-16 text-zinc-100 my-3" />
                        <p className="text-zinc-400">Arcade has highly qualified and certified staff for industrial painting and cleaning services. They provide a team of support staff to ensure your project runs smoothly as per your plan. Arcade also has an approved team that specializes in painting & grinding the special power tools. We can work as per your plan schedule.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                </div>
            </main >
        </>
    )
}