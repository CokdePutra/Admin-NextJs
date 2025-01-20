import { useState, useEffect } from "react";

interface ModalTambahDataProps {
  show: boolean;
  onClose: () => void;
  onAddEvent: (name: string, date: string, description: string) => void;
  event?: {
    nama_event: string;
    tanggal_event: string;
    deskripsi: string;
  };
}

const ModalTambahData: React.FC<ModalTambahDataProps> = ({ show, onClose, onAddEvent, event }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  useEffect(() => {
    if (event) {
      setEventName(event.nama_event);
      setEventDate(event.tanggal_event);
      setEventDescription(event.deskripsi);
    }
  }, [event]);

  const handleAddEvent = () => {
    onAddEvent(eventName, eventDate, eventDescription);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-999">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{event ? "Edit Event" : "Tambah Event"}</h2>
        <input
          type="text"
          placeholder="Nama Event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="date"
          placeholder="Tanggal Event"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <textarea
          placeholder="Deskripsi Event"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddEvent}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {event ? "Update Event" : "Add Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahData;
