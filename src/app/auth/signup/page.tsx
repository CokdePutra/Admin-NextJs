'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ButtonDefault from '@/components/Buttons/ButtonDefault';

export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nama: '',
        nim: '',
        no_telp: '',
        golongan_darah: '',
        tanggal_lahir: '',
        alamat: '',
        level_user: 'mahasiswa'
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validasi input
        if (!formData.email || !formData.password || !formData.nama ||
            !formData.no_telp || !formData.golongan_darah || !formData.tanggal_lahir || !formData.alamat) {
            setError('Semua field harus diisi!');
            return;
        }
    
        setError(null);
        setSuccess(null);
    
        try {
            console.log('Signup attempt:', formData);
            console.log('Requesting to:', `${process.env.NEXT_PUBLIC_API_URL}/auth/register`);
    
            // Kirim data pendaftaran
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, formData);
    
            setSuccess('Akun berhasil dibuat! Silakan masuk.');
            setError(null);
    
            // Redirect ke halaman login
            setTimeout(() => {
                router.push('/auth/signin');
            }, 2000);
        } catch (error: any) {
            console.error('Signup error:', error);
            console.log('Error response:', error.response);
    
            setError(error.response?.data?.message || 'Gagal membuat akun. Silakan coba lagi.');
            setSuccess(null);
        }
    };
    
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 my-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">BUAT AKUN</h2>
                <p className="text-center text-gray-600">KSR-PMI UNIT-ITB STIKOM BALI</p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="blabla@gmail.com" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="*****" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Nama Lengkap</label>
                        <input 
                            type="text" 
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Nama Lengkap" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">NIM</label>
                        <input 
                            type="text" 
                            name="nim"
                            value={formData.nim}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="NIM STIKOM BALI" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">No. Telepon</label>
                        <input 
                            type="text" 
                            name="no_telp"
                            value={formData.no_telp}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="No. Telepon" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Golongan Darah</label>
                        <input 
                            type="text" 
                            name="golongan_darah"
                            value={formData.golongan_darah}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Golongan Darah" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Tanggal Lahir</label>
                        <input 
                            type="date" 
                            name="tanggal_lahir"
                            value={formData.tanggal_lahir}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Alamat</label>
                        <input 
                            type="text" 
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Alamat" 
                        />
                    </div>
                    <ButtonDefault label="Daftar" type="submit" customClasses="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </form>
                
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                {success && <p className="text-green-500 text-center mt-4">{success}</p>}

                <p className="text-center mt-4 text-gray-600">
                    Sudah Punya Akun? <a href="./signin" className="text-green-600 hover:underline">Masuk</a>
                </p>
            </div>
        </div>
    );
}