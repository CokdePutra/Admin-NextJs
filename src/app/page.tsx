import Kegiatan from '@/components/Kegiatan/kegiatan'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto py-10 px-10 md:px-30 flex flex-col md:flex-row items-center justify-between mt-20 mb-10 md:mb-30">
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

      {/* Circle Section */}
      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Image 
            src="/kegiatan-photo/Stiker-Star.png"
            alt="KSR Logo" 
            width={80} 
            height={80} 
            className="object-contain"
          />
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <section className="bg-teal-50/80 py-30"> {/* Changed from bg-gray-100 to bg-teal-50/80 */}
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

      {/* Activities Section */}
     <Kegiatan />
        
      {/* Map Section */}
      <section className="bg-teal-800 text-white py-16">
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

      {/* Contact Form */}
      <section className="py-20">
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

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">User Guide</h4>
              <ul className="space-y-2">
                <li>UI Design</li>
                <li>UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Brainstorming</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Best practices</li>
                <li>Cases</li>
                <li>User street</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>Design</li>
                <li>Developers</li>
                <li>Development features</li>
                <li>Design system</li>
                <li>Collaboration features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/ksr.stikombali/?hl=en" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:opacity-75 transition-opacity duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@ksrpmiksr3207" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:opacity-75 transition-opacity duration-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}