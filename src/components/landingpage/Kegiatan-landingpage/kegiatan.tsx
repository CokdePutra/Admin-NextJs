import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import axios from 'axios';

    const activities = [
        {
          title: 'VOSCOM',
          description: 'Telah mengikuti ajang kompetisi bergengsi Virtual Scout Competition (VOSCOM) 2023',
          image: '/kegiatan-photo/voscom-png.png',
        },
        {
          title: 'Diklatdas',
          description: 'Merupakan kegiatan yang wajib diikuti anggota dari KSR untuk mendapatkan dan tahap mendelegasikan unit KSR',
          image: '/kegiatan-photo/Diklat-png.png',
        },
        {
          title: 'Donor Darah',
          description: 'Donor darah merupakan kegiatan rutin yang dilaksanakan setiap kegiatan unit memberikan bantuan darah',
          image: '/kegiatan-photo/Donor-png.png',
        },
        {
          title: 'MOCA',
          description: 'Mountain Camping merupakan kegiatan rutin unit dalam memberikan bantuan pengambilan atau pemberian ilmu di dataran tinggi',
          image: '/kegiatan-photo/Moca-png.png',
        }, {
            title: 'MOCA',
            description: 'Mountain Camping merupakan kegiatan rutin unit dalam memberikan bantuan pengambilan atau pemberian ilmu di dataran tinggi',
            image: '/kegiatan-photo/Moca-png.png',
          },
        
      ]

const Kegiatan: React.FC = () => {
    return (
        <section className="py-20" id="section-kegiatan">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 text-black">KEGIATAN</h2>
          <h2 className="text-2xl text-center mb-10 text-black">KSR ITB STIKOM Bali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity) => (
          <div key={activity.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <Image src={activity.image} alt={activity.title} width={300} height={200} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
        <h3 className="font-bold text-black text-xl mb-2">{activity.title}</h3>
        <p className="text-black text-sm">{activity.description}</p>
          </div>
          <Link href={`/kegiatan/${activity.title.toLowerCase()}`} className="mt-4 bg-teal-800 text-white px-4 py-2 rounded-md hover:bg-teal-700 w-full text-center">
        Selengkapnya
          </Link>
        </div>
          </div>
        ))}
          </div>
        </div>
      </section>
    );
};

export default Kegiatan;