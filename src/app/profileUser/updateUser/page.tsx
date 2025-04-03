"use client";
import Navbar from "@/components/User/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
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



const page = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

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

      if (loading) return <div>Loading...</div>;
      if (!userData) return <div>User not found</div>;
      
  return (
    <>
      <Navbar />
      <div className="mt-20 flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <Head>
          <title>Edit Profile</title>
          <meta name="description" content="Edit profile page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold text-red-600 drop-shadow-md">
              EDIT PROFILE
            </h1>
            <p className="text-gray-700">KSR-PMI UNIT-ITB STIKOM BALI</p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="nim"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                NIM (Khusus Mahasiswa STIKOM)
              </label>
              <input
                type="text"
                value={userData.nim}
                // onChange={(e) => setUserData({ ...userData, nim: e.target.value })}
                id="nim"
                name="nim"
                placeholder="Value"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="namaLengkap"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                value={userData.nama}
                id="namaLengkap"
                name="namaLengkap"
                placeholder="Value"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="alamat"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <input
                type="text"
                value={userData.alamat}
                id="alamat"
                name="alamat"
                placeholder="Value"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="golDarah"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Gol. Darah
                </label>
                <input
                  type="text"
                  value={userData.golongan_darah}
                  id="golDarah"
                  name="golDarah"
                  placeholder="Value"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="noTelp"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  No. Telp
                </label>
                <input
                  type="text"
                  value={userData.no_telp}
                  id="noTelp"
                  name="noTelp"
                  placeholder="Value"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="tempatTanggalLahir"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Tempat, Tanggal Lahir
              </label>
              <input
                type="date"
                value={userData.tanggal_lahir}
                id="tempatTanggalLahir"
                name="tempatTanggalLahir"
                placeholder="Value"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* <div>
              <label
                htmlFor="instansi"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Instansi
              </label>
              <input
                type="text"
                id="instansi"
                name="instansi"
                placeholder="Value"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div> */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link
                href="/profileUser"
                className="rounded-md bg-teal-600 px-4 py-3 text-center text-white transition-colors duration-200 hover:bg-teal-700"
              >
                Kembali
              </Link>
              <button
                type="submit"
                className="rounded-md bg-teal-600 px-4 py-3 text-white transition-colors duration-200 hover:bg-teal-700"
              >
                Perbaharui
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
