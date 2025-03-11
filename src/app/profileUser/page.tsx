"use client";
import Navbar from "@/components/User/Navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
const Page = () => {
  const DataUser = [
    {
      name: "I Made Kanha Mahesyogi",
      nim: "230030039",
      gol_darah: "o",
      email: "kanhalolok@gmail.com",
      pass: "lowlock",
      id: 0,
    },
    {
      name: "Cokorda Gde Putra Widnyana Surya",
      nim: "230030040",
      gol_darah: "o",
      email: "gmoons@gmail.com",
      pass: "lowlock",
      id: 1,
    },
  ];

  const userQR_Code = DataUser.find((user) => user.id === 1);

  // Encode user data as JSON if user is found
  const [value] = useState(userQR_Code ? JSON.stringify(userQR_Code) : "");
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <main className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left Panel */}
          <div className="flex h-fit flex-col items-center rounded-lg bg-white p-6 shadow-md md:col-span-1">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/logo/Logo_KSR_1.png"
                alt="Profile Picture"
                width={160}
                height={160}
                priority
              />
            </div>

            <h1 className="mb-2 text-center text-3xl font-bold">
              {userQR_Code?.name}
            </h1>
            <p className="mb-8 text-center text-gray-500">
              Student/Admin/Worker
            </p>
            <div className="mb-4">
              <QRCode
                value={value}
                size={180}
                level="H"
                className="mx-auto"
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>
            <p className="mb-4 text-center text-sm text-gray-500">
              Scan QR code to view digital profile
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
