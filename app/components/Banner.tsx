import Image from 'next/image'

export default function Banner() {
    return (

        <section className="w-full h-[550px] relative text-center bg-gradient-to-r from-[#ffc42f] to-[#562702]">
            {/* <Image
                src='/banner.jpg' 
                fill 
                alt="banner"
                quality={60}
                className='object-cover brightness-[0.45]'
                /> */}

            <div className="absolute w-full h-full p-2 flex justify-center items-center">
                <div className="flex flex-col gap-3 max-w-5xl text-white">
                    <h3 className="text-3xl sm:text-4xl lg:text-7xl font-bold">ARCADE</h3>
                    <h1 className="text-sm sm:text-lg lg:text-2xl font-bold">The ultimate solution for your business needs</h1>
                    {/* <p className="text-lg leading-snug">We provide industrial solutions, trading and supplies, and man power supply in the region. Since 2021, we have been offering a wide range of services and products to meet the diverse needs of our clients across various sectors, such as manufacturing, construction, maritime, and more. We are committed to delivering high-quality, cost-effective, and innovative solutions that exceed our customers’ expectations and contribute to their success.</p> */}
                    <button className="w-50 md:w-80 bg-white text-yellow-600 font-bold py-2 px-4 mx-auto rounded-lg shadow-2xl  hover:bg-yellow-500 hover:text-white transition duration-300">Learn more</button>
                </div>
            </div>
        </section>
    )
}
