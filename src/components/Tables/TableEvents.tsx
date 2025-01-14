"use client";

import ButtonDefault from "../Buttons/ButtonDefault";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  id_event: number;
  nama_event: string;
  tanggal_event: string;
  deskripsi: string;
}

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true
});

const TableEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await api.get("/events");
        setEvents(data);
      } catch (error) {
        setError('Failed to fetch events');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!events.length) return <div>No events found</div>;

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Nama Event
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Tanggal Event
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Deskripsi
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id_event}>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                  index === events.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <h5 className="text-dark dark:text-white">{event.nama_event}</h5>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === events.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="text-dark dark:text-white">{new Date(event.tanggal_event).toLocaleDateString()}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === events.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="text-dark dark:text-white">{event.deskripsi}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                  index === events.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <div className="flex items-center justify-end space-x-3.5">
                    <ButtonDefault
                        label="Edit"
                        link="#"
                        customClasses="bg-primary text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                        // onClick={() => handleEditEvent(event)}
                    />
                    <ButtonDefault
                        label="Delete"
                        link="#"
                        customClasses="bg-red text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                        // onClick={() => handleDeleteEvent(event.id_event)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableEvents;
