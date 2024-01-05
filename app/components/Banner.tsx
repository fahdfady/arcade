import Image from 'next/image'

export default function Banner() {
    return (
        <section className="w-full h-[550px] relative text-center bg-gradient-to-r from-[#f5b52f] to-[#333]">
            {/* <Image
                src='/banner.jpg' 
                fill 
                alt="banner"
                quality={60}
                className='object-cover brightness-[0.75]'
            /> */}

            <div className="absolute w-full h-full p-2 flex justify-center items-center">
                <div className="flex flex-col gap-3 max-w-5xl text-white">
                    <h3 className="text-4xl sm:text-5xl lg:text-8xl font-bold">ARCADE</h3>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Empowering Your Business</h1>
                    <button className="w-50 md:w-80 bg-[#cb982f] text-white font-bold border-2 border-[#cb982f] py-2 px-4 mx-auto rounded-lg shadow-lg hover:bg-transparent hover:border-[#e9b858] transition duration-300">Discover More</button>
                </div>
            </div>
        </section>
    )
}
