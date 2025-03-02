"use client"; // Tambahkan ini!

import { useState } from "react";
import { useAuth } from "@/utils/auth";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahUser from "@/components/Modal/ModalTambahUser";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";


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

  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated || user?.level_user !== "admin") {
    return <p>Akses ditolak. Halaman ini hanya untuk Admin.</p>;
  }

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
      const response = await api.post("/auth/register", {
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
      setAlertMessage("User berhasil ditambahkan!");
      setShowAlert(true);
      setShowModal(false);
      setTimeout(() => setShowAlert(false), 3000); // Auto-hide alert
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      {showAlert && <AlertSuccess message={alertMessage} onClose={() => setShowAlert(false)} />}
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
