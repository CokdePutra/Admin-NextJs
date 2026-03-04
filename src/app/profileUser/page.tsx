"use client";
import Navbar from "@/components/User/Navbar/Navbar";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { useAuth } from "@/utils/auth";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

interface UserData {
  id_user: number;
  email: string;
  nama: string;
  nim: string;
  no_telp: string;
  golongan_darah: string;
  tanggal_lahir: string;
  alamat: string;
  level_user: string;
}

const Page = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleClickProfile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user?.id_user) {
          const response = await api.get(`/users/${user.id_user}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const qrValue = userData
    ? JSON.stringify({
        nama: userData.nama,
        nim: userData.nim || "", // Optional NIM
        email: userData.email,
      })
    : "";

  if (loading) return <div>Loading...</div>;
  if (!userData) return <div>User not found</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <main className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left Panel */}
          <div className="flex h-fit flex-col items-center rounded-lg bg-white p-6 shadow-md md:col-span-1">
            <div
              onClick={handleClickProfile}
              className="group relative m-10 h-40 w-40 cursor-pointer overflow-hidden rounded-full"
            >
              <Image
                src={previewImage || "/images/logo/Logo_KSR_1.png"}
                alt="Profile Picture"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Ganti Profile
              </div>
            </div>

            <h1 className="mb-2 text-center text-3xl font-bold text-black">
              {userData.nama}
            </h1>
            <p className="mb-8 text-center text-gray-500">
              {userData.level_user}
            </p>
            <div className="mb-4">
              <QRCode
                value={qrValue}
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
                <h2 className="mb-1 text-lg font-medium text-black">
                  Nama Lengkap
                </h2>
                <p className="text-gray-500">{userData.nama}</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">
                  NIM (khusus Mahasiswa Stikom)
                </h2>
                <p className="text-gray-500">{userData.nim}</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">Email</h2>
                <p className="text-gray-500">{userData.email}</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">
                  Alamat Lengkap
                </h2>
                <p className="text-gray-500">{userData.alamat}</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">
                  Golongan Darah
                </h2>
                <p className="text-gray-500">{userData.golongan_darah}</p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">
                  Tanggal Lahir
                </h2>
                <p className="text-gray-500">
                  {new Date(userData.tanggal_lahir).toLocaleDateString()}
                </p>
              </div>

              <div>
                <h2 className="mb-1 text-lg font-medium text-black">
                  No Telp.
                </h2>
                <p className="text-gray-500">{userData.no_telp}</p>
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
