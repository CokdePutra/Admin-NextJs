"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-teal-800 p-3 px-8 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Image
          src="/images/logo/Logo KSR 2.png"
          alt="Logo"
          width={70}
          height={70}
        />

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden flex-grow justify-center space-x-8 text-white md:flex">
          <Link href="/" className="hover:text-yellow-300">
            Beranda
          </Link>
          <Link href="/#section-tentang-kami" className="hover:text-yellow-300">
            Tentang Kami
          </Link>
          <Link href="/#section-kegiatan" className="hover:text-yellow-300">
            Kegiatan
          </Link>
          <Link href="/anggotaKsr" className="hover:text-yellow-300">
            Anggota
          </Link>
          <Link href="/#section-map" className="hover:text-yellow-300">
            Lokasi
          </Link>
          <Link href="/#section-kontak" className="hover:text-yellow-300">
            Kontak
          </Link>
        </div>

        {/* Sign up button - Desktop */}
        <div className="hidden md:flex">
          <Link
            href="/auth/signin"
            className="rounded-md bg-white px-4 py-2 text-teal-800 hover:bg-gray-200"
          >
            Sign In
          </Link>
        </div>

        {/* Navigation Links - Mobile */}
        {isOpen && (
          <div className="mt-4 flex w-full flex-col space-y-4 text-white md:hidden">
            <Link href="/" className="hover:text-yellow-300">
              Beranda
            </Link>
            <Link
              href="/#section-tentang-kami"
              className="hover:text-yellow-300"
            >
              Tentang Kami
            </Link>
            <Link href="/#section-kegiatan" className="hover:text-yellow-300">
              Kegiatan
            </Link>
            <Link href="/anggotaKsr" className="hover:text-yellow-300">
              Anggota
            </Link>
            <Link href="/#section-map" className="hover:text-yellow-300">
              Lokasi
            </Link>
            <Link href="/#section-kontak" className="hover:text-yellow-300">
              Kontak
            </Link>
            <Link
              href="/auth/signin"
              className="rounded-md bg-white px-4 py-2 text-center text-teal-800 hover:bg-gray-200"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
