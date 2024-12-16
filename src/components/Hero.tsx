import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })
const Hero = () => {
    return (
        <div className={`${inter.className} flex items-center justify-between  md:flex-row flex-col md:p-16 p-5 md:my-0 my-5 md:h-screen md:gap-5 gap-10`}>
            {/* text - left div */}
            <div className='space-y-5 flex-1'>
                <h1 className='text-[#000000] font-bold text-[44px]'>Welcome To Our Website</h1>
                <p className='text-[#4C4C4C] font-normal text-[32px]'>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s
                    standard
                </p>
                <button className='flex justify-center items-center text-[#FFFFFF] font-normal text-[28px] bg-[#121212] h-[66px] w-[237px]'>Contact US</button>
            </div>
            {/* image - right div */}
            <div className='flex-1 flex justify-end'>
               <div className='lg:w-[502px] h-[465px]'>
               <Image src={"/images/main.png"} alt='hero-image' width={502} height={465} className='object-cover'/>
               </div>
            </div>
        </div>
    )
}

export default Hero