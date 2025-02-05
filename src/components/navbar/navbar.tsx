"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-800 p-3 fixed w-full top-0 z-50 shadow-md px-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Image src="/images/logo/Logo KSR 2.png" alt="Logo" width={70} height={70} />
        
        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 text-white">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="#" className="hover:text-yellow-300">Kegiatan</Link>
          <Link href="#" className="hover:text-yellow-300">Anggota</Link>
          <Link href="#" className="hover:text-yellow-300">Lokasi</Link>
          <Link href="#" className="hover:text-yellow-300">Kontak</Link>
          <Link href="#" className="hover:text-yellow-300">Galeri</Link>
        </div>

        {/* Sign up button - Desktop */}
        <div className="hidden md:flex">
          <Link href="#" className="bg-white text-teal-800 px-4 py-2 rounded-md hover:bg-gray-200">
            Sign In
          </Link>
        </div>

        {/* Navigation Links - Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 text-white mt-4 w-full">
            <Link href="/" className="hover:text-yellow-300">Beranda</Link>
            <Link href="#" className="hover:text-yellow-300">Kegiatan</Link>
            <Link href="#" className="hover:text-yellow-300">Anggota</Link>
            <Link href="#" className="hover:text-yellow-300">Lokasi</Link>
            <Link href="#" className="hover:text-yellow-300">Kontak</Link>
            <Link href="#" className="hover:text-yellow-300">Galeri</Link>
            <Link href="#" className="bg-white text-teal-800 px-4 py-2 rounded-md hover:bg-gray-200 text-center">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
