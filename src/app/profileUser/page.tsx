import Navbar from "@/components/User/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <Head>
          <title>Profile Page</title>
          <meta name="description" content="User profile page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left Panel */}
          <div className="flex h-fit flex-col items-center rounded-lg bg-white p-6 shadow-md md:col-span-1">
            <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/logo/Logo_KSR_1.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <h1 className="mb-2 text-center text-3xl font-bold">[Your Name]</h1>
            <p className="mb-8 text-center text-gray-500">
              Student/Admin/Worker
            </p>
          </div>

          {/* Right Panel */}
          <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="mb-1 text-lg font-medium">Nama Lengkap</h2>
                <p className="text-gray-500">I MADE KANHA MAHESYOGI</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">
                  NIM (khusus Mahasiswa Stikom)
                </h2>
                <p className="text-gray-500">230030039</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">Email</h2>
                <p className="text-gray-500">kmahesyogi@gmail.com</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">Alamat Lengkap</h2>
                <p className="text-gray-500">Jl Soka Gg VI No 42, Tohpati</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">Golongan Darah</h2>
                <p className="text-gray-500">B</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">
                  Tempat, Tanggal Lahir
                </h2>
                <p className="text-gray-500">Denpasar, 01 Agustus 2005</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">Instansi</h2>
                <p className="text-gray-500">ITB STIKOM BALI</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium">No Telp.</h2>
                <p className="text-gray-500">081239199662</p>
              </div>

              <Link href="/profileUser/updateUser">
                <button className="mt-6 w-full rounded-md bg-teal-600 py-3 font-medium text-white transition-colors hover:bg-teal-700">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
