"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{
    nama: string;
    golongan_darah: string;
  } | null>(null);

  // Simulasikan mendapatkan data user dari localStorage atau API
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-teal-800 p-3 px-8 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Image
          src="/images/logo/Logo_KSR_2.png"
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

        {user ? (
          <Link href="/profileUser" className="hidden md:block">
            <div className=" hidden items-center space-x-2 md:flex">
              <span className="font-semibold text-white">{user.nama}, </span>
              <div className="group relative inline-block">
                <span className="cursor-default rounded-3xl bg-white px-3 font-bold text-teal-800">
                  {user.golongan_darah}
                </span>
                <span className="absolute left-1/2 mt-6 w-max -translate-x-1/2 transform cursor-default rounded bg-white px-2 py-1 text-sm text-black opacity-0 transition-opacity group-hover:opacity-100">
                  Golongan Darah {user.golongan_darah}
                </span>
              </div>
              <Image
                src="/images/user/DefaultProfile.jpg" // Ganti dengan gambar profil asli jika ada
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </Link>
        ) : (
          <div className="hidden md:flex">
            <Link
              href="/auth/signin"
              className="rounded-md bg-white px-4 py-2 text-teal-800 hover:bg-gray-200"
            >
              Sign In
            </Link>
          </div>
        )}

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

            {user ? (
              <Link
                href="/#section-kontak"
                className="flex hover:text-yellow-300"
              >
                <Image
                  src="/images/user/DefaultProfile.jpg" // Ganti dengan gambar profil asli jika ada
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="ml-3 font-semibold text-white">
                  {user.nama},{" "}
                </span>
                <div className="group relative inline-block">
                  <span className="mx-1 cursor-default rounded-3xl bg-white px-3 font-bold text-teal-800">
                    {user.golongan_darah}
                  </span>
                  <span className="absolute left-1/2 mt-6 w-max -translate-x-1/2 transform cursor-default rounded bg-white px-2 py-1 text-sm text-black opacity-0 transition-opacity group-hover:opacity-100">
                    Golongan Darah {user.golongan_darah}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="rounded-md bg-white px-4 py-2 text-center text-teal-800 hover:bg-gray-200"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
