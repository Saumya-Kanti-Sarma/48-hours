"use client";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black h-17.5 w-full flex-between px-10 max-[370px]:px-2 max-sm:h-15">
      <div className='flex-center gap-1.5 '>
        <Image src={"search-menu.svg"} alt='search-icon' width={30} height={30} className='max-[840px]:w-5' />
        <Image
          src={"text-logo.svg"}
          alt='text-logo'
          width={120} height={50}
          className='hidden max-[840px]:block max-[320px]:w-25' />
      </div>

      <div className='flex-center gap-1.5'>
        <Image src={"text-logo.svg"} alt='text-logo' width={150} height={50} className='ml-35 max-[840px]:hidden' />
      </div>

      <div className='flex-center gap-2 max-[320px]:gap-1'>
        <Link href={"#"}
          className='bg-red-600 p-2 rounded-lg text-white max-[320px]:py-0.5 max-[320px]:rounded-sm'>
          <span className='max-[590px]:hidden'>Subscribe: less than ₹49.00/week</span>
          <span className='hidden max-[590px]:inline max-[460px]:hidden text-[14px] '>Join: ₹49.00/week </span>
          <span className='hidden max-[460px]:inline max-[320px]:text-[12px]'>Subscribe</span>
        </Link>
        <Image src={"main-logo.svg"} alt='main-logo' width={40} height={40} className='max-[320px]:w-7.5' />
      </div>
    </nav>
  )
}

export default Navbar
