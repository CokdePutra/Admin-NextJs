'use client';

import Image from 'next/image';
import ButtonDefault from '@/components/Buttons/ButtonDefault';
export default function SignIn() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 my-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">BUAT AKUN</h2>
                <p className="text-center text-gray-600">KSR-PMI UNIT-ITB STIKOM BALI</p>

                <form className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="blabla@gmail.com" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">NIM</label>
                        <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="NIM STIKOM BALI" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Nama Lengkap</label>
                        <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Nama Lengkap" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Tanggal Lahir</label>
                        <input 
                            type="date" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700">Golongan Darah</label>
                        <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Golongan Darah" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Alamat</label>
                        <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Alamat" 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="*****" 
                        />
                    </div>
                    <ButtonDefault label="Daftar" customClasses="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </form>
                
                <button 
                    className="w-full mt-4 flex items-center justify-center border border-gray-300 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <Image 
                        src="/images/logo/pngwing.com.png" 
                        alt="Google Logo" 
                        width={20} 
                        height={20} 
                        className="mr-2"
                    />
                    Daftar dengan Google
                </button>

                <p className="text-center mt-4 text-gray-600">
                    Sudah Punya Akun? <a href="./signin" className="text-green-600 hover:underline">Masuk</a>
                </p>
            </div>
        </div>
    );
}
