"use client";

import { useRef, useState } from "react";
import { useAuth } from "@/utils/auth";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahUser from "@/components/Modal/ModalTambahUser";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";
import SearchForm from "@/components/Header/SearchForm";

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
  const { isAuthenticated, loading, user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Gunakan useRef untuk mereferensikan fungsi fetchUsers di TableUsers
  const tableUsersRef = useRef<{ fetchUsers: () => void } | null>(null);

  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated || user?.level_user !== "admin") {
    return <p>Akses ditolak. Halaman ini hanya untuk Admin.</p>;
  }

  // Fungsi menambah user
  const handleAddUser = async (
    email: string,
    password: string,
    name: string,
    nim: string,
    no_telp: string,
    golongan_darah: string,
    tanggal_lahir: string,
    alamat: string,
    level_user: string
  ) => {
    try {
      await api.post("/auth/register", {
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

      setAlertMessage("User berhasil ditambahkan!");
      setShowAlert(true);
      setShowModal(false);
      setTimeout(() => setShowAlert(false), 3000);

      // Refresh data setelah tambah user
      tableUsersRef.current?.fetchUsers();
    } catch (error) {
      console.error("Gagal menambahkan user:", error);
    }
  };

  // Fungsi menghapus user dengan konfirmasi
  const handleDeleteUser = async (id: number) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${id}`);
      setAlertMessage("User berhasil dihapus!");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      // Refresh data setelah delete
      tableUsersRef.current?.fetchUsers();
    } catch (error) {
      console.error("Gagal menghapus user:", error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      {showAlert && <AlertSuccess message={alertMessage} onClose={() => setShowAlert(false)} />}
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
        <div className="w-auto">
          <ButtonDefault
            label="Tambah User"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            onClick={() => {
              setSelectedUser(null);
              setShowModal(true);
            }}
          />
        </div>
        <SearchForm />
        </div>
        <TableUsers
          ref={tableUsersRef}
          onEditUser={(user: User) => {
            setSelectedUser(user);
            setShowModal(true);
          }}
          onDeleteUser={handleDeleteUser}
        />
      </div>
      <ModalTambahUser 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        onAddUser={handleAddUser} 
        onEditUser={() => {}} 
        user={selectedUser} 
      />
    </DefaultLayout>
  );
};

export default Home;
