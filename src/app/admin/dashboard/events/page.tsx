"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/utils/auth"; // Import middleware
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import EventCard from "@/components/Cards/EventCard";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahData from "@/components/Modal/ModalTambahData";
import AlertSuccess from "@/components/Alerts/AlertSuccess"; // ✅ Import Alert
import DefaultLayout from "@/components/Layouts/DefaultLayout"; // Corrected import path

const ListEvent = () => {
  const { isAuthenticated, loading, user } = useAuth(); // Gunakan middleware auth
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // ✅ State untuk alert
  const eventCardRef = useRef<{ handleAddEvent: (name: string, date: string, description: string, keterangan: string) => void }>(null);

  if (loading) return <p>Loading...</p>; // Tampilkan loading saat verifikasi
  if (!isAuthenticated || user?.level_user !== "admin") {
    return <p>Akses ditolak. Halaman ini hanya untuk Admin.</p>;
  }

  const handleAddEvent = (name: string, date: string, description: string) => {
    if (eventCardRef.current) {
      eventCardRef.current.handleAddEvent(name, date, description, ""); 
      setShowAlert(true); // ✅ Tampilkan alert setelah menambahkan event
      setTimeout(() => setShowAlert(false), 3000); // ✅ Sembunyikan otomatis setelah 3 detik
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Events" />
      
      {/* ✅ Alert Success */}
      {showAlert && <AlertSuccess message="Event berhasil ditambahkan!" onClose={() => setShowAlert(false)} />}

      <div className="flex flex-col gap-10">
        <div className="w-[20rem]">
          <ButtonDefault
            label="Tambah Event"
            link="#"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            onClick={() => setShowModal(true)}
          />
        </div>
        <EventCard ref={eventCardRef} />
      </div>
      
      <ModalTambahData
        show={showModal}
        onClose={() => setShowModal(false)}
        onAddEvent={handleAddEvent}
      />
    </DefaultLayout>
  );
};

export default ListEvent;
