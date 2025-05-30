"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/utils/auth"; // Middleware untuk autentikasi
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import EventCard from "@/components/Cards/EventCard";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahData from "@/components/Modal/ModalTambahData";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ListEvent = () => {
  // State Management
  const { isAuthenticated, loading, user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const eventCardRef = useRef<{ handleAddEvent: (name: string, date: string, description: string, keterangan: string) => void }>(null);

  // Handle Loading and Access Control
  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated || user?.level_user !== "admin") {
    return <p>Akses ditolak. Halaman ini hanya untuk Admin.</p>;
  }

  // Handle Add Event
  const handleAddEvent = (name: string, date: string, description: string) => {
    if (eventCardRef.current) {
      eventCardRef.current.handleAddEvent(name, date, description, ""); // Delegasikan ke EventCard
      showSuccessAlert("Event berhasil ditambahkan!");
    }
  };

  // Show Success Alert
  const showSuccessAlert = (message: string) => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Sembunyikan alert setelah 3 detik
  };
  

  return (
    <DefaultLayout>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Events" />

      {/* Alert Success */}
      {showAlert && <AlertSuccess message="Event berhasil ditambahkan!" onClose={() => setShowAlert(false)} />}

      {/* Content */}
      <div className="flex flex-col gap-10">
        {/* Button Tambah Event */}
        <div className="w-[20rem]">
          <ButtonDefault
            label="Tambah Event"
            link="#"
            customClasses="bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Event Card */}
        <EventCard ref={eventCardRef} />
      </div>

      {/* Modal Tambah Event */}
      <ModalTambahData
        show={showModal}
        onClose={() => setShowModal(false)}
        onAddEvent={handleAddEvent}
      />
    </DefaultLayout>
  );
};

export default ListEvent;