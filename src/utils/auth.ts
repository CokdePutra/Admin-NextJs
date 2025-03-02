import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Interface untuk data user
interface User {
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

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // Atur tipe data user
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/signin");
      return;
    }

    try {
      const res = await axios.get("http://localhost:4000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      console.log("User data:", res.data); // Debugging

      if (res.data.user) {
        setIsAuthenticated(true);
        setUser(res.data.user); // Simpan data user di state
      } else {
        throw new Error("User tidak ditemukan");
      }
    } catch (error) {
      console.error("Auth error:", error);
      localStorage.removeItem("token");
      router.push("/auth/signin");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const logout = async () => {
    try {
      await axios.post("http://localhost:4000/api/auth/logout", {}, { withCredentials: true });
      localStorage.removeItem("token");
      router.push("/auth/signin");
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return { isAuthenticated, loading, user, logout };
};
