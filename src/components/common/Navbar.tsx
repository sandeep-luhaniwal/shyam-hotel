'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainButton } from './';
import Image from 'next/image';
import Icons from './Icons';
import { Icon } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-dark md:hidden hover:text-[#2a2066] relative flex flex-col items-center gap-1 focus:outline-none"
          >
            <span
              className={`   inline-block h-0.5 bg-blue-dark transition-all duration-300 
      ${isOpen ? "rotate-45 translate-y-1.5 w-5" : "w-8"} `}
            ></span>
            <span
              className={`
      inline-block  h-0.5 bg-blue-dark transition-all duration-300
      ${isOpen ? "-rotate-225 -translate-y-2 mt-2 w-5" : "w-8"}
    `}
            ></span>

            {/* Text */}
            <p className="leading-none text-xs">
              {isOpen ? "Close" : "Menu"}
            </p>
          </button>

          <div className="flex items-center space-x-8">
            <Link href="/">
              <Image width={40} height={40} src={'/images/png/main-logo.png'} alt='main-logo.png' />
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="text-blue-dark hover:text-[#2a2066] transition-colors duration-200 font-light"
                    >
                      {item.name}
                    </Link>
                    <span className={`${isActive ? 'w-full' : 'w-0'} duration-500 group-hover:w-full bg-blue-dark absolute -bottom-[22px] block h-1`}></span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block">
            <MainButton >
              <span className='flex justify-center items-center gap-2'>
                <Icons icon='user' />
                Sign In / Sign Up
              </span>
            </MainButton>
          </div>
          <div className="bg-blue-dark md:hidden w-8 h-8 flex justify-center items-center rounded-full">
            <Icons icon='user' />
          </div>
        </div>

      </div>
      <div className={`md:hidden fixed mt-16 inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute left-0 top-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-blue-dark hover:text-[#2a2066] block text-lg font-medium transition-colors duration-200 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-6 py-6">
            <MainButton >
              <span className='flex justify-center items-center gap-2'>
                <Icons icon='user' />
                Sign In / Sign Up
              </span>
            </MainButton>
          </div>
        </div>
      </div>
    </nav>
  );
}