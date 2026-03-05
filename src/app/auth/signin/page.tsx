"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import { useAuth } from "@/context/AuthContext";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!process.env.NEXT_PUBLIC_API_URL) {
      setError("Konfigurasi API URL tidak ditemukan!");
      setIsLoading(false);
      return;
    }

    console.log("Mengirim data login:", formData); // Debugging

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        formData,
        { headers: { "Content-Type": "application/json" } },
      );

      console.log("Respons dari server:", response.data); // Debugging

      // const { token, user } = response.data;
      const token = response.data?.token; // Cek apakah `token` ada
      const user = response.data?.user; // Cek apakah `user` ada

      if (!token || !user) {
        throw new Error("Login gagal, data tidak lengkap");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(user));
      setUser(user);

      router.push(user.level_user === "admin" ? "/admin/dashboard/users" : "/");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error);
      setError(
        error.response?.data?.message ||
          "Server error, silahkan coba lagi nanti",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-black">
          MASUK AKUN
        </h2>
        <p className="text-center text-black">KSR-PMI UNIT-ITB STIKOM BALI</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-3"
              placeholder="Blabla@gmail.com"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-black">Password</label>{" "}
            {/* Perbaikan label */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border p-3"
              placeholder="******"
              required
            />
          </div>
          <ButtonDefault
            label={isLoading ? "Memproses..." : "Masuk"}
            customClasses="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          />
        </form>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        <p className="mt-4 text-center text-gray-600">
          Belum Punya Akun?{" "}
          <a href="./signup" className="text-green-600 hover:underline">
            Buat
          </a>
        </p>
      </div>
    </div>
  );
}
