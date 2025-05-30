"use client";

import ButtonDefault from "../Buttons/ButtonDefault";
import ModalTambahData from "../Modal/ModalTambahData";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";

interface Event {
  id_event: number;
  nama_event: string;
  tanggal_event: string;
  deskripsi: string;
  keterangan: string;
}

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

const EventCard = forwardRef((props, ref) => {
  // State Management
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [alert, setAlert] = useState({ visible: false, message: "" }); // State untuk alert

  // Fetch Events on Component Mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Fetch Events from API
  const fetchEvents = async () => {
    try {
      const { data } = await api.get("/events");
      const updatedEvents = data.map((event: Event) => ({
        ...event,
        keterangan: determineKeterangan(event.tanggal_event),
      }));
      setEvents(updatedEvents);
    } catch (error) {
      setError("Failed to fetch events");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Determine Event Status (Keterangan)
  const determineKeterangan = (date: string) => {
    const eventDate = new Date(date).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    if (eventDate === today) return "Running";
    if (eventDate < today) return "Finished";
    return "Coming Soon";
  };

  // Add Event
  const handleAddEvent = async (name: string, date: string, description: string) => {
    const keterangan = determineKeterangan(date);
    try {
      const { data } = await api.post("/events", {
        nama_event: name,
        tanggal_event: date,
        deskripsi: description,
        keterangan: keterangan,
      });
      setEvents([...events, data]);
      showAlert("Event berhasil ditambahkan!"); // Tampilkan alert sukses
    } catch (error) {
      console.error("Failed to add event", error);
    }
    setShowModal(false);
  };

  // Edit Event
  const handleEditEvent = (event: Event) => {
    setCurrentEvent(event);
    setShowModal(true);
  };

  // Update Event
  const handleUpdateEvent = async (name: string, date: string, description: string) => {
    const keterangan = determineKeterangan(date);
    if (currentEvent) {
      try {
        await api.put(`/events/${currentEvent.id_event}`, {
          nama_event: name,
          tanggal_event: date,
          deskripsi: description,
          keterangan: keterangan,
        });
        setEvents(
          events.map((e) =>
            e.id_event === currentEvent.id_event
              ? { ...e, nama_event: name, tanggal_event: date, deskripsi: description, keterangan: keterangan }
              : e
          )
        );
        setCurrentEvent(null);
        showAlert("Event berhasil diperbarui!"); // Tampilkan alert sukses
      } catch (error) {
        console.error("Failed to update event", error);
      }
    }
    setShowModal(false);
  };

  // Delete Event
  const handleDeleteEvent = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (confirmed) {
      try {
        await api.delete(`/events/${id}`);
        setEvents(events.filter((event) => event.id_event !== id));
        showAlert("Event berhasil dihapus!"); // Tampilkan alert sukses
      } catch (error) {
        console.error("Failed to delete event", error);
      }
    }
  };

  // Show Alert
  const showAlert = (message: string) => {
    setAlert({ visible: true, message });
    setTimeout(() => setAlert({ visible: false, message: "" }), 3000); // Sembunyikan alert setelah 3 detik
  };

  // Expose Add Event Function to Parent via Ref
  useImperativeHandle(ref, () => ({
    handleAddEvent,
  }));

  // Render Loading, Error, or Events
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!events.length) return <div>No events found</div>;

  // Sort Events by Date
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.tanggal_event).setHours(0, 0, 0, 0);
    const dateB = new Date(b.tanggal_event).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    if (dateA === today && dateB === today) return 0;
    if (dateA === today) return -1;
    if (dateB === today) return 1;
    if (dateA > today && dateB > today) return dateA - dateB;
    if (dateA < today && dateB < today) return dateA - dateB;
    if (dateA > today && dateB < today) return -1;
    return 1;
  });

  return (
    <>
      {/* Alert */}
      {alert.visible && <AlertSuccess message={alert.message} onClose={() => setAlert({ visible: false, message: "" })} />}

      {sortedEvents.map((event) => (
        <div
          key={event.id_event}
          className="bg-white p-4 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-xl"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">{event.nama_event}</h2>
            <p className="text-dark dark:text-white mb-4">{new Date(event.tanggal_event).toLocaleDateString()}</p>
            <p className="text-dark dark:text-white">{event.deskripsi}</p>
            <p className="text-dark dark:text-white">{event.keterangan}</p>
            <div className="flex justify-end mt-4">
              <ButtonDefault
                label="Edit"
                link="#"
                customClasses="bg-primary text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                onClick={() => handleEditEvent(event)}
              />
              <ButtonDefault
                label="Delete"
                link="#"
                customClasses="bg-red text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                onClick={() => handleDeleteEvent(event.id_event)}
              />
            </div>
          </div>
        </div>
      ))}
      {showModal && currentEvent && (
        <ModalTambahData
          key={currentEvent.id_event}
          show={showModal}
          onClose={() => setShowModal(false)}
          onAddEvent={handleUpdateEvent}
          event={currentEvent}
        />
      )}
    </>
  );
});

export default EventCard;