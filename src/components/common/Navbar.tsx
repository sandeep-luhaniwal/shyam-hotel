'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainButton } from './';
import Image from 'next/image';
import Icons from './Icons';

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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-dark hover:text-[#2a2066] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </div>
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-dark hover:text-[#2a2066] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
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