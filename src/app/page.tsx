"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUsers from "@/components/Tables/TableUsers";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahUser from "@/components/Modal/ModalTambahUser"; // Import the new modal component

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout"; // Corrected import path
import React from "react";



export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (name: string, nim: string, no_telp: string, golongan_darah: string, tanggal_lahir: string, alamat: string) => {
    // Handle adding user logic here
    console.log("User added:", name, nim, no_telp, golongan_darah, tanggal_lahir, alamat);
    setShowModal(false);
  };

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="" />

        <div className="flex flex-col gap-10">
          <div className="w-[20rem]">
            <ButtonDefault
              label="Tambah User"
              link="#"
              customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
              onClick={() => setShowModal(true)}
            />
          </div>
          <TableUsers />
        </div>

        <ModalTambahUser
          show={showModal}
          onClose={() => setShowModal(false)}
          onAddUser={handleAddUser}
        />
      </DefaultLayout>
    </>
  );
}
