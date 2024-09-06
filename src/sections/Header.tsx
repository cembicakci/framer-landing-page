"use client"

import Image from 'next/image';
import ArrowRight from '@/assets/arrow-right.svg'
import MenuIcon from '@/assets/menu.svg'
import Logo from '@/assets/logosaas.png'
import { useEffect, useState } from 'react';

export const Header = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [])

  return (
    <header className={`sticky top-0 z-20 backdrop-blur-sm`}>
      <div className="flex items-center justify-center bg-black text-white py-3 text-sm gap-3">
        <p className='hidden md:block text-white/60'>Streamline your workflow and boost your productivity.</p>
        <div className='gap-1 inline-flex items-center'>
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Logo' width={40} height={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>About</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>
              <button className='btn'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
