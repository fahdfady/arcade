'use client'

import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";


export default function Clients() {
    const [clients, setClients] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {

        const fetchClients = async () => {
            const queryRef = collection(db, "clients");

            try {
                // db is toJSON beacuse of an error in typescript      to find to avoid using toJSON which no longer exists
                const querySnapshot = await getDocs(queryRef);
                setClients(querySnapshot.docs.map(doc => doc.data()))
                setDataFetched(true);
            }
            catch (e) {
                console.log(e);
            }
        }
        if (!dataFetched) {
            fetchClients()
        }
    }, []);


    return (
        <section className="w-full text-center">
            <div className="section-title mb-3">
                <h2 className="text-xl md:text-3xl font-semibold uppercase">our clients</h2>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-x-2 max-sm:gap-1 gap-y-1 max-md:grid-cols-4 max-sm:grid-cols-3">
                    {clients.map((client) => (
                        <div tabIndex={0} key={client.id} className="text-center flex flex-col items-center justify-start gap-4 max-sm:gap-1 p-2 max-sm:p-1 m-3 max-sm:m-1 bg-zinc-100 text-gray-800 rounded-lg shadow-md group animate-slide-in-left hover:bg-[#e1b856] focus:bg-[#ffc944]  hover:border-yellow-700 focus:border-yellow-900 hover:shadow-lg focus:shadow-xl transition duration-300 ease-in-out">

                            <div className="max-w-full h-[180px] max-lg:h-[150px] max-sm:h-[60px] relative">
                                <Image src={`./clients/${client.img}`} alt={client.name} width={200} height={200} quality={40} className="w-full h-full object-contain" loading="lazy" />
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-5">
                                <h2 className="h-fit font-bold text-xl sm:text-3xl lg:text-4xl">{client.shortname}</h2>

                                <h4 className="font-semibold text-xs sm:text-lg leading-tight">{client.name}</h4>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}