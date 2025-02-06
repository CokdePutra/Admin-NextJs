import React from 'react'

const Maplandingpage = () => {
  return (
<section className="bg-teal-800 text-white py-20" id="section-map">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Lokasi Kami</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63113.05133669146!2d115.21729560587974!3d-8.63762276311226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240f24881c587%3A0xe8413f111e0aa096!2sInstitut%20Teknologi%20Dan%20Bisnis%20STIKOM%20BALI!5e0!3m2!1sen!2sid!4v1738086505089!5m2!1sen!2sid"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
          </div>
          <div className="mt-8 text-center">
        <h3 className="font-bold mb-2">Alamat</h3>
        <p>Jl. Raya Puputan No.86, Dangin Puri Klod, Denpasar Timur, Kota Denpasar, Bali 80234</p>
          </div>
        </div>
      </section>
  )
}

export default Maplandingpage