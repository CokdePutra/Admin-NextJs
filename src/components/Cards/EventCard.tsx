'use client';

import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

interface Event {
  id_event: number;
  nama_event: string;
  tanggal: string;
  deskripsi: string;
  keterangan: string;
}

const EventCard = forwardRef((props, ref) => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useImperativeHandle(ref, () => ({
    handleAddEvent: async (nama_event: string, tanggal: string, deskripsi: string, keterangan: string) => {
      try {
        const token = localStorage.getItem('token');
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
          nama_event,
          tanggal,
          deskripsi,
          keterangan
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        fetchEvents(); // Refresh the events list
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
  }));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {events.map((event) => (
        <div key={event.id_event} className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                {event.nama_event}
              </h4>
              <p className="text-sm font-medium">{event.tanggal}</p>
              <p className="text-sm text-gray-600">{event.deskripsi}</p>
              <span className="text-sm font-medium">{event.keterangan}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

EventCard.displayName = 'EventCard';
export default EventCard;