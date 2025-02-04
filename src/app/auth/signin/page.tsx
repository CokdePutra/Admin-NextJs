'use client';

import Image from 'next/image';
import ButtonDefault from '@/components/Buttons/ButtonDefault';
export default function SignIn() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-black">MASUK AKUN</h2>
                <p className="text-center text-black">KSR-PMI UNIT-ITB STIKOM BALI</p>

                <form className="mt-6">
                    <div>
                        <label className="block text-black">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-3 border rounded-lg mt-1" 
                            placeholder="Blabla@gmail.com" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-3 border rounded-lg mt-1" 
                            placeholder="******" 
                        />
                    </div>
                    <ButtonDefault label="Masuk" customClasses="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </form>
                
                <button 
                    className="w-full mt-4 flex items-center justify-center border py-3 rounded-lg"
                >
                    <Image 
                        src="/images/logo/pngwing.com.png" 
                        alt="Google Logo" 
                        width={20} 
                        height={20} 
                        className="mr-2"
                    />
                    Masuk dengan Google
                </button>

                <p className="text-center mt-4 text-gray-600">
                    Belum Punya Akun? <a href="./signup" className="text-blue-500">Daftar</a>
                </p>
            </div>
        </div>
    );
}
