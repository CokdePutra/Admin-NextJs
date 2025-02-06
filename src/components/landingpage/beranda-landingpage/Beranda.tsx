import React from 'react'
import Image from 'next/image'
const Beranda = () => {
  return (
    <section className="container mx-auto py-10 px-10 md:px-30 flex flex-col md:flex-row items-center justify-between mt-20 mb-10 md:mb-30" id="section-beranda">
        <div className="md:w-1/2 mb-8 md:mb-0 max-w-xl">
          <h1 className="text-5xl font-bold mb-4 text-black">KSR ITB STIKOM BALI</h1>
            <p className="text-black mb-6 text-justify ">
            KSR ITB STIKOM Bali adalah singkatan dari Korps Sukarela Palang Merah Indonesia Unit Institut Teknologi dan Bisnis STIKOM Bali.
            </p>
            <p className="text-black mb-6 text-justify">
            Sebuah organisasi kemahasiswaan di kampus ITB STIKOM Bali yang bergerak di bidang kepalangmerahan. KSR ITB STIKOM Bali merupakan unit dari PMI (Palang Merah Indonesia) Kota Denpasar.       
            </p>
          <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-700">
        Kontak Kami
          </button>
        </div>
        <div className="md:w-1/2 hidden md:block w-full h-auto relative pl-8">
          <Image src="/images/logo/Logo KSR 2.png" alt="KSR Logo" width={200} height={200} style={{width: '100%', height: 'auto'}} className="max-w-full"/>
        </div>
      </section>
  )
}

export default Beranda