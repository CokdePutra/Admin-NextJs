import React from 'react';

const QrDaftar: React.FC = () => {
    const qrValue = 'https://example.com';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-sm w-full">
          <h1 className="text-xl font-bold mb-4 text-gray-800">DAFTAR ANGGOTA KSR</h1>
          <p className="text-sm text-gray-600 mb-4">KSR-PMI UNIT-ITB STIKOM BALI</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-64 h-64 mx-auto">
              <image href="/images/Qr/qr-PENDAFTARAN.png" width="300" height="300" />
            </svg>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">Scan QR CODE</p>
            <p className="text-xs text-gray-500">Scan QR Code diatas untuk Daftar</p>
          </div>
        </div>
      </div>
    );
};

export default QrDaftar;