import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<>
    <nav className="bg-teal-800 p-3 fixed w-full top-0 z-50 shadow-md px-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Image src="/images/logo/Logo KSR 2.png" alt="Logo" width={70} height={70} />
        
        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white hover:text-yellow-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 text-white">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="#" className="hover:text-yellow-300">Kegiatan</Link>
          <Link href="#" className="hover:text-yellow-300">Anggota</Link>
          <Link href="#" className="hover:text-yellow-300">Lokasi</Link>
          <Link href="#" className="hover:text-yellow-300">Kontak</Link>
          <Link href="#" className="hover:text-yellow-300">Galeri</Link>
        </div>

        {/* Sign up button */}
        <div className="hidden md:flex">
          <Link href="#" className="bg-white text-teal-800 px-4 py-2 rounded-md hover:bg-gray-200">Sign up</Link>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full mt-4">
            <div className="flex flex-col space-y-4 text-white">
              <Link key="beranda" href="/" className="hover:text-yellow-300">Beranda</Link>
              <Link key="kegiatan" href="#" className="hover:text-yellow-300">Kegiatan</Link>
              <Link key="anggota" href="#" className="hover:text-yellow-300">Anggota</Link>
              <Link key="lokasi" href="#" className="hover:text-yellow-300">Lokasi</Link>
              <Link key="kontak" href="#" className="hover:text-yellow-300">Kontak</Link>
              <Link key="galeri" href="#" className="hover:text-yellow-300">Galeri</Link>
              <Link key="signup" href="#" className="bg-white text-teal-800 px-4 py-2 rounded-md hover:bg-gray-200 text-center">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
