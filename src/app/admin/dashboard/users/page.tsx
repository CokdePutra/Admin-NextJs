"use client";

import { useState } from "react";
import { useAuth } from "@/utils/auth"; // Import middleware
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahUser from "@/components/Modal/ModalTambahUser";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";

// Create API instance
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

interface User {
  id_user: number;
  email: string;
  password: string;
  nama: string;
  nim: string;
  no_telp: string;
  golongan_darah: string;
  tanggal_lahir: string;
  alamat: string;
  level_user: string;
}

const Home = () => {
  const { isAuthenticated, loading, user } = useAuth(); // Gunakan middleware auth
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p>Loading...</p>; // Tampilkan loading saat verifikasi
 // Pastikan user tidak null sebelum mengecek level_user
if (!isAuthenticated || user?.level_user !== "admin") {
  return <p>Akses ditolak. Halaman ini hanya untuk Admin.</p>;
}

  const handleAddUser = async (email: string, password: string, name: string, nim: string, no_telp: string, golongan_darah: string, tanggal_lahir: string, alamat: string, level_user: string) => {
    try {
      const response = await api.post("/users", {
        email,
        password,
        nama: name,
        nim,
        no_telp,
        golongan_darah,
        tanggal_lahir,
        alamat,
        level_user,
      });
      console.log("User added:", response.data);
      setShowModal(false);
      window.location.reload(); // Refresh the page to show new data
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <div className="w-[20rem]">
          <ButtonDefault
            label="Tambah User"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            onClick={() => {
              setSelectedUser(null);
              setShowModal(true);
            }}
          />
        </div>
        <TableUsers
          onEditUser={(user: User) => {
            setSelectedUser(user);
            setShowModal(true);
          }}
          onDeleteUser={() => {}}
        />
      </div>
      <ModalTambahUser show={showModal} onClose={() => setShowModal(false)} onAddUser={handleAddUser} onEditUser={() => {}} user={selectedUser} />
    </DefaultLayout>
  );
};

export default Home;
