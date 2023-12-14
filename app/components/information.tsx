import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { apiURL } from '../constants';

const fetchInformation = async () => {
    const response = await fetch(`${apiURL}information`, { cache: 'no-store' });
    const informationList = await response.json();
    return informationList;
}

const Information = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        const getInformation = async () => {
            const informationData = await fetchInformation();
            setInformation(informationData);
        };
        getInformation();
    }, []);

    return (
        <section className="about" id="about">
            {/* {information.map((info) => (
                <div className="flex flex-col justify-center items-center p-4 shadow-lg rounded-lg mx-4 my-8" key={info.id}>
                    <div className="flex justify-center items-center w-full p-4">
                        <Image src={"/personal-pic.webp"}
                            width={400} height={250}
                            alt={"personal picture"}
                            quality={80}
                        />
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <p className="mb-2 font-medium text-xl text-gray-700">
                            "{info.text}"
                        </p>

                        <div className="authorInfo">
                            <p className="ml-2 text-gray-500 font-semibold text-lg">
                                {info.jobTitle}
                            </p>
                        </div>
                    </div>
                </div>
            ))} */}
            <div className="flex flex-col justify-center items-center gap-4 text-center mx-4 my-8">
                <h1 className="text:3xl sm:text-5xl lg:text-6xl uppercase font-bold">
                    Fahd Ashour
                </h1>
                <h3 className="text-xl lg:text-2xl">Front-end web developer</h3>
                <p className='text:base lg:text-xl text-gray-300'>able to build a Web presence from the ground up - from concept, navigation, layout, resposive to UX . Skilled at writing well-designed, clean, testable and efficient code. in love with Reactjs</p>
            
            </div>
        </section>
    )
}

export default Information;
