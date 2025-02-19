"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getDonorDarahData() {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Cache-Control': 'no-store',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default function DonorDarahDetail() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDonorDarahData();
        const today = new Date();
        const filteredData = result.filter((item: any) => {
          const eventDate = new Date(item.tanggal_event);
          return item.nama_event.toLowerCase().includes('donor darah') && eventDate >= today;
        });
        setData(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 font-medium">Gagal memuat data: Pastikan server backend berjalan</p>
          <p className="text-red-400 text-sm mt-2">Detail: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Tidak ada data kegiatan</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Data Kegiatan Donor Darah</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {data.map((item: any) => (
          <div key={item.id_event} className="border-b pb-6 last:border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-sm font-semibold text-gray-600">Nama Kegiatan</h2>
                <p className="text-lg text-gray-800">{item.nama_event}</p>
              </div>
              
              <div>
                <h2 className="text-sm font-semibold text-gray-600">Tanggal</h2>
                <p className="text-lg text-gray-800">{new Date(item.tanggal_event).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</p>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-sm font-semibold text-gray-600">Deskripsi</h2>
              <p className="text-lg text-gray-800 mt-1">{item.deskripsi}</p>
            </div>

            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Daftar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
