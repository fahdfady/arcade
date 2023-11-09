import Image from 'next/image'

export default function Banner() {
    return (
        <section className="w-full h-[80vh] relative text-center">
            <Image
                src='/banner.jpg' 
                fill 
                alt="banner"
                quality={60}
                className='object-cover brightness-[0.45]'
                />
            
            <div className="absolute w-full h-full p-2 flex justify-center items-center backdrop-blur-sm">
                <div className="flex flex-col gap-2 max-w-4xl">
                    <h1 className="text-6xl font-semibold">Arcade</h1>
                    <p className="text-lg">a provider of industrial solutions, trading and supplies, and man power supply in the region. since 2021, we offer a wide range of services and products to meet the diverse needs of our clients across various sectors, such as manufacturing, construction, maritime, and more. We are committed to delivering high-quality, cost-effective, and innovative solutions that exceed our customers’ expectations and contribute to their success.</p>
                </div>
            </div>
        </section>
    )
}