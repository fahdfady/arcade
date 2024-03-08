import Navigation from "@/components/Navigation";

export default function About() {
    return (
        <>
            <Navigation />
            <main className="relative pb-16">
                <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">About Us</h1>
                        <p className="mt-4 text-zinc-400">From 2021, we’ve been introducing our services across various industrial sectors.</p>
                    </div>
                    <hr className="w-full border-none color-unset h-px bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">No Delays, No Surprises:</h2>
                        <h3 className="text-lg my-3 text-zinc-400">Our Contracting Process Guarantees Your Satisfaction</h3>
                        <ul className="text-zinc-400 list-disc space-y-2">
                            <li>We know how important it is to deliver your project on time and within budget. That’s why we have a dedicated contracting department and we can Keep the project on the appropriate timeline without any Delay.</li>
                            <li>Skilled laborers handle every aspect, including plumbing, electrical and carpentry.</li>
                            <li>Communicate status of the project throughout the build with the client and other pertinent parties to can be save the project plan.</li>
                        </ul>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">We are more than just a company</h2>
                        <h3 className="text-lg my-3 text-zinc-400">we are your partner in success. We value your trust and satisfaction</h3>
                        <p className="text-zinc-400">We are more than just a company, we are your partner in success. We value your trust and satisfaction, and we strive to build long-term relationships with our clients. We are always ready to listen to your feedback and suggestions, and we are constantly improving our products and services to meet your changing needs.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                    <article className="max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Look No Further Than Us</h2>
                        <h3 className="text-lg my-3 text-zinc-400">Whether you need planning, execution, support, or improvement.</h3>
                        <p className="text-zinc-400">We are committed to providing the highest quality products and services to our clients. We are constantly improving our products and services to meet your changing needs. We are always ready to listen to your feedback and suggestions, and we are constantly improving our products and services to meet your changing needs.</p>
                    </article>
                    <hr className="hidden border-none color-unset w-full h-px md:block bg-zinc-800" />
                </div>
            </main >
        </>
    )
}