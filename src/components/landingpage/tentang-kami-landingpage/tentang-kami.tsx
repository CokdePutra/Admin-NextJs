import React from 'react'
import Link from 'next/link'
const Tentangkami = () => {
  return (
    <section className="bg-teal-50/80 py-30" id="section-tentang-kami"> {/* Changed from bg-gray-100 to bg-teal-50/80 */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
            <div className="relative" style={{paddingBottom: '56.25%'}}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg border-4 border-teal-800"
              src="/video/WhatsApp Video 2024-10-29 at 09.09.57_33f872ce.mp4#t=0.001"
              title="KSR Video"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            </div>
        </div>
        <div className="md:w-1/2">
        <h2 className="text-xl font-bold mb-1 text-teal-800">Tentang Kami</h2>
          <h2 className="text-3xl mb-4 text-black">KSR ITB STIKOM Bali</h2>
          <p className="text-black text-justify pb-4">
          KSR ITB STIKOM Bali adalah singkatan dari Korps Sukarela Palang Merah Indonesia Unit Institut Teknologi dan Bisnis STIKOM Bali. Ini adalah sebuah Unit Kegiatan Mahasiswa (UKM) di ITB STIKOM Bali yang bergerak di bidang kepalangmerahan. KSR ITB STIKOM Bali merupakan wadah bagi mahasiswa yang ingin mengembangkan jiwa sosial dan kemanusiaan, serta  mengaktualisasikan Tri Dharma Perguruan Tinggi, khususnya dalam pengabdian kepada masyarakat.
          DAFTAR SEKARANG !          </p>
           <Link href="/Qr-pendaftaran">
          <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-700">
           Daftar Sekarang
          </button></Link>
        </div>
          </div>
        </div>
      </section>
  )
}

export default Tentangkami