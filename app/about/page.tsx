'use client'

import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useEffect, useState } from "react";


export default function About() {
    const [members, setMembers] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {

        const fetchMembers = async () => {
            const queryRef = collection(db, "members");

            try {
                // db is toJSON beacuse of an error in typescript      to find to avoid using toJSON which no longer exists
                const querySnapshot = await getDocs(queryRef);
                setMembers(querySnapshot.docs.map(doc => doc.data()))
                console.log(members)
                setDataFetched(true);
            }
            catch (e) {
                console.log(e);
            }
        }
        if (!dataFetched) {
            fetchMembers()
        }
    }, []);

    return (
        <>
            <div className="lg:max-w-7xl mx-auto py-5 px-4 flex flex-col gap-4">
                <div className="text-center">
                    <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-stone-900 md:text-5xl lg:text-6xl dark:text-white">About Us</h1>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">From 2021 we introduce our services to all industrial sectors (Manufacturing, Constructions, Maritime,…)</p>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">We work to introduce all available solutions to select the Right Tools for Right Application, which reflect our vision to grow your business.</p>
                </div>
                <div className="text-center">
                    <h1 className="my-4 text-3xl font-extrabold leading-none tracking-tight text-stone-900 md:text-3xl lg:text-4xl dark:text-white">No Delays, No Surprises:</h1>
                    <h1 className="my-4 text-3xl font-extrabold leading-[1.26] tracking-tight text-stone-900 md:text-3xl lg:text-4xl dark:text-white">Our Contracting Process <mark className="px-2 text-white bg-primary-500 rounded dark:bg-primary-500">Guarantees</mark> Your Satisfaction</h1>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300"> We know how important it is to deliver your project on time and within budget. That’s why we have a dedicated contracting department and we can Keep the project on the appropriate timeline without any Delay.</p>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">we have Skilled laborers to complete the project, including plumbing, electrical and carpentry.</p>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">Communicate status of the project throughout the build with the client and other pertinent parties to can be save the project plan.</p>
                </div>
                <div className="text-center">
                    <h1 className="my-4 text-3xl font-extrabold leading-[1.26] tracking-tight text-stone-900 md:text-3xl lg:text-4xl dark:text-white">We are <mark className="px-2 text-white bg-primary-500 rounded dark:bg-primary-500">more</mark> than just a company</h1>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">We are more than just a company, we are your partner in success. We value your trust and satisfaction, and we strive to build long-term relationships with our clients. We are always ready to listen to your feedback and suggestions, and we are constantly improving our products and services to meet your changing needs.</p>
                </div>

            </div>
            <div className="bg-primary-600 text-stone-100 min-h-[50vh] flex flex-col justify-center items-center text-center">
                <h2 className="my-4 text-3xl font-extrabold leading-[1.26] tracking-tight text-stone-900 md:text-3xl lg:text-4xl dark:text-white">Meet Our Team</h2>

                <div className="max-w-7xl mx-auto flex justify-center items-center lg:gap-4">
                    {/* <div className="max-w-[20rem] py-3 px-1 flex flex-col justify-center items-center gap-3">
                        <div className="w-[18rem] h-[18rem] relative">
                            <Image
                                src='/mohamedesammoussa.PNG'
                                // width={320}
                                // height={320}
                                fill
                                quality={60}
                                alt='member'
                                className="rounded-full object-cover"
                            />
                        </div>

                        <h2 className="text-5xl font-extrabold">Mohamed Essam</h2>

                        <h3 className="text-3xl font-semibold">CEO</h3>
                    </div> */}
                    {members.map((member) => (
                        <div
                            className="max-w-[20rem] py-3 px-1 flex flex-col justify-center items-center gap-3"
                            key={member?.id}
                        >
                            <div className="w-[8rem] h-[8rem] md:w-[15rem] md:h-[16rem] relative">
                                <Image
                                    src={member?.photo}
                                    // width={320}
                                    // height={320}
                                    fill
                                    quality={60}
                                    alt={`member ${member?.name}`}
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <h2 className="text-2xl sm:text-5xl font-extrabold capitalize">{member?.name}</h2>

                            <h3 className="textl-xl md:text-3xl font-semibold">{member?.role}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:max-w-7xl mx-auto py-5 px-4 flex flex-col gap-4">
                <div className="text-center">
                    <h1 className="my-4 text-3xl font-extrabold leading-[1.26] tracking-tight text-stone-900 md:text-3xl lg:text-4xl dark:text-white">Look <mark className="px-2 text-white bg-primary-500 rounded dark:bg-primary-500">No Further</mark> Than Us</h1>
                    <p className="text-base font-normal my-2 text-stone-500 lg:text-lg dark:text-stone-300">If you are looking for a reliable, professional, and friendly company that can handle any challenge in any sector, from construction to trading. Whether you need planning, execution, support, or improvement, look no further than us. We have the experience, expertise, and equipment to deliver high-quality results in any sector, from manufacturing to maritime. Whether you need design, installation, maintenance, or repair, we can provide you with the best solutions for your needs and budget. <mark className="px-2 font-bold text-white bg-primary-500 rounded dark:bg-primary-500">Contact us today</mark> and let us show you what we can do for you. You will be amazed by our work ethic, efficiency, and customer service. Don’t settle for less, choose us for your next industrial project.</p>
                </div>
            </div>
        </>
    )
}