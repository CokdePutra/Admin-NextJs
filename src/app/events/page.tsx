"use client";

import { useState, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import EventCard from "@/components/Cards/EventCard";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import ModalTambahData from "@/components/Modal/ModalTambahData";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const ListEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const eventCardRef = useRef<{ handleAddEvent: (name: string, date: string, description: string) => void }>(null);

  const handleAddEvent = (name: string, date: string, description: string) => {
    if (eventCardRef.current) {
      eventCardRef.current.handleAddEvent(name, date, description);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Events" />

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
