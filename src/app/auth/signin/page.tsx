'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ButtonDefault from '@/components/Buttons/ButtonDefault';

export default function SignIn() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('Login attempt with:', { email: formData.email });
            
            // Ensure a slash between the API URL and the route
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, formData);
            
            console.log('Login response:', res.data);

            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userData', JSON.stringify(res.data.user));
                
                const userLevel = res.data.user.level_user;
                router.push(userLevel === 'admin' ? '/dashboard/admin' : '/dashboard');
            } else {
                setError('Login gagal: Token tidak ditemukan');
            }
        } catch (error: any) {
            console.error('Login error:', error.response || error);
            setError(
                error.response?.data?.message || 
                'Server error, silahkan coba lagi nanti'
            );
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-black">MASUK AKUN</h2>
                <p className="text-center text-black">KSR-PMI UNIT-ITB STIKOM BALI</p>

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-black">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg mt-1" 
                            placeholder="Blabla@gmail.com" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg mt-1" 
                            placeholder="******" 
                        />
                    </div>
                    <ButtonDefault label="Masuk" customClasses="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </form>
                
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                <p className="text-center mt-4 text-gray-600">
                    Belum Punya Akun? <a href="./signup" className="text-green-600 hover:underline">Buat</a>
                </p>
            </div>
        </div>
    );
}
