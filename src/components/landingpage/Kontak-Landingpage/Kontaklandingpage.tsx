import React from 'react'

const Kontaklandingpage = () => {
  return (
    <section className="py-20" id="section-kontak">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-black text-center mb-8">Kontak Kami</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
    {/* Left side content */}
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold text-black mb-4">Hubungi Kami</h3>
      <p className="text-gray-700 mb-6 text-justify">
        Kami sangat menghargai setiap pertanyaan, saran, dan masukan dari Anda. 
        Silakan hubungi kami melalui formulir ini atau melalui kontak yang tersedia.
        Tim kami akan merespons secepat mungkin untuk membantu Anda.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
      <span className="text-teal-800 mr-3">📍</span>
      <p>Jl. Raya Puputan No.86, Denpasar, Bali</p>
        </div>
        <div className="flex items-center">
      <span className="text-teal-800 mr-3">📧</span>
      <p>ksr@stikom-bali.ac.id</p>
        </div>
        <div className="flex items-center">
      <span className="text-teal-800 mr-3">📱</span>
      <p>+62 812 3456 7890</p>
        </div>
      </div>
    </div>

    {/* Right side form */}
    <div className="md:w-1/2">
      <form className="space-y-4">
        <div>
      <label className="block text-gray-700 mb-2">Nama</label>
      <input type="text" className="w-full p-2 border rounded-md" />
        </div>
        <div>
      <label className="block text-gray-700 mb-2">Nama Panggilan</label>
      <input type="text" className="w-full p-2 border rounded-md" />
        </div>
        <div>
      <label className="block text-gray-700 mb-2">E-mail</label>
      <input type="email" className="w-full p-2 border rounded-md" />
        </div>
        <div>
      <label className="block text-gray-700 mb-2">Pesan</label>
      <textarea className="w-full p-2 border rounded-md h-32"></textarea>
        </div>
        <button type="submit" className="w-full bg-teal-800 text-white py-2 rounded-md hover:bg-teal-700">
      Submit
        </button>
      </form>
    </div>
      </div>
    </div>
        
  </section>
  )
}

export default Kontaklandingpage