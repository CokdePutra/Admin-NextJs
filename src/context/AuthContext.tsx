import { createContext, useContext, useEffect, useState } from "react";

// 1. Buat context untuk Auth
const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
} | null>(null);

// 2. Provider untuk membungkus aplikasi
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<any>(null);

  // Hanya ambil field yang diizinkan
  const filterUser = (userObj: any) => {
    if (!userObj) return null;
    const {
      id_user,
      email,
      nama,
      nim,
      no_telp,
      golongan_darah,
      tanggal_lahir,
      alamat,
      level_user,
    } = userObj;
    return {
      id_user,
      email,
      nama,
      nim,
      no_telp,
      golongan_darah,
      tanggal_lahir,
      alamat,
      level_user,
    };
  };

  // Custom setUser agar hanya field yang diizinkan
  const setUser = (userObj: any) => {
    setUserState(filterUser(userObj));
  };

  // Ambil user dari localStorage saat pertama kali load
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  // Sinkronisasi logout antar tab
  useEffect(() => {
    const syncLogout = (event: StorageEvent) => {
      if (event.key === "userData" && event.newValue === null) {
        setUser(null);
      }
    };
    window.addEventListener("storage", syncLogout);
    return () => window.removeEventListener("storage", syncLogout);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook untuk akses context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth harus dipakai di dalam <AuthProvider>");
  return context;
}
