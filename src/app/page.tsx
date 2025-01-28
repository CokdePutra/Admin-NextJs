// app/page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const activities = [
    {
      title: 'VOSCOM',
      description: 'Telah mengikuti ajang kompetisi bergengsi Virtual Scout Competition (VOSCOM) 2023',
      image: '/kegiatan-photo/voscom-png.png',
    },
    {
      title: 'Diklatdas',
      description: 'Merupakan kegiatan yang wajib diikuti anggota dari KSR untuk mendapatkan dan tahap mendelegasikan unit KSR',
      image: '/kegiatan-photo/Diklat-png.png',
    },
    {
      title: 'Donor Darah',
      description: 'Donor darah merupakan kegiatan rutin yang dilaksanakan setiap kegiatan unit memberikan bantuan darah',
      image: '/kegiatan-photo/Donor-png.png',
    },
    {
      title: 'MOCA',
      description: 'Mountain Camping merupakan kegiatan rutin unit dalam memberikan bantuan pengambilan atau pemberian ilmu di dataran tinggi',
      image: '/kegiatan-photo/Moca-png.png',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-teal-800 p-3 fixed w-full top-0 z-50 shadow-md px-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Image src="/images/logo/Logo KSR 2.png" alt="Logo" width={70} height={70} />
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white hover:text-yellow-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
        </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 text-white">
        <Link href="/" className="hover:text-yellow-300">Beranda</Link>
        <Link href="#" className="hover:text-yellow-300">Kegiatan</Link>
        <Link href="#" className="hover:text-yellow-300">Anggota</Link>
        <Link href="#" className="hover:text-yellow-300">Lokasi</Link>
        <Link href="#" className="hover:text-yellow-300">Kontak</Link>
        <Link href="#" className="hover:text-yellow-300">Galeri</Link>
        </div>

        {/* Sign up button */}
        <div className="hidden md:flex">
        <Link href="#" className="bg-white text-green-500 px-4 py-2 rounded-md hover:bg-gray-200">Sign up</Link>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="md:hidden w-full mt-4 hidden">
        <div className="flex flex-col space-y-4 text-white">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="#" className="hover:text-yellow-300">Kegiatan</Link>
          <Link href="#" className="hover:text-yellow-300">Anggota</Link>
          <Link href="#" className="hover:text-yellow-300">Lokasi</Link>
          <Link href="#" className="hover:text-yellow-300">Kontak</Link>
          <Link href="#" className="hover:text-yellow-300">Galeri</Link>
          <Link href="#" className="bg-white text-green-500 px-4 py-2 rounded-md hover:bg-gray-200 text-center">Sign up</Link>
        </div>
        </div>
      </div>
      </nav>


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
        <div className="md:w-1/2 hidden md:block w-full h-auto relative aspect-w-16 aspect-h-9 pl-8">
          <Image src="/images/logo/Logo KSR 2.png" alt="KSR Logo" width={200} height={200} layout='responsive' className="max-w-full h-auto"/>
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
          <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-700">
           Daftar Sekarang
          </button>
        </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-2 text-black">KEGIATAN</h2>
          <h2 className="text-2xl text-center mb-10 text-black">KSR ITB STIKOM Bali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src={activity.image} alt={activity.title} width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-black text-xl mb-2">{activity.title}</h3>
                  <p className="text-black text-sm">{activity.description}</p>
                  <button className="mt-4 bg-teal-800 text-white px-4 py-2 rounded-md hover:bg-teal-700 w-full">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">TELEPON</h3>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <p key={i}>+62-878-555-554</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">E-MAIL</h3>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <p key={i}>BLA.BLA@GMAIL.COM</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">E-MAIL</h3>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <p key={i}>BLA.BLA@GMAIL.COM</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Kontak Kami</h2>
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
            <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
              Submit
            </button>
          </form>
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
                <a href="#" className="hover:text-yellow-300">
                  <span className="sr-only">Facebook</span>
                  {/* Add social media icons here */}
                </a>
                {/* Add more social media links */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}