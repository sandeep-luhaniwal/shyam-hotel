'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface MainButtonProps {
  children: ReactNode;
  url?: string;
  className?: string;
  onClick?: () => void;
}

export default function MainButton({ children, url, onClick,className }: MainButtonProps) {
  const baseClasses = "bg-blue-dark cursor-pointer text-white px-4 py-2.5 rounded-full hover:bg-[#2a2066] transition-colors duration-200 font-normal inline-block text-center";

  if (url) {
    return (
      <Link href={url} className={`${baseClasses} !${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} !${className}`}>
      {children}
    </button>
  );
}