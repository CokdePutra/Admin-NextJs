import Beranda from '@/components/landingpage/beranda-landingpage/Beranda'
import Circlepmi from '@/components/landingpage/circle-pmi/Circlepmi'
import Footerlandingpage from '@/components/landingpage/footer-landingpage/Footerlandingpage'
import Kegiatan from '@/components/landingpage/Kegiatan-landingpage/kegiatan'
import Kontaklandingpage from '@/components/landingpage/Kontak-Landingpage/Kontaklandingpage'
import Maplandingpage from '@/components/landingpage/Map-landingpage/Maplandingpage'
import Tentangkami from '@/components/landingpage/tentang-kami-landingpage/tentang-kami'
import Navbar from '@/components/navbar/navbar'

export default function Home() {

  return (
    <main className="min-h-screen">
      {/* navbar */}
      <Navbar />

      {/* Beranda Section */}
      <Beranda />

      {/* Circle Section */}
      <Circlepmi />
      
      {/* Tentangkami Section */}
      <Tentangkami />

      {/* Activities Section */}
     <Kegiatan />
        
      {/* Map Section */}
      <Maplandingpage />

      {/* Contact Form */}
      <Kontaklandingpage />

      {/* Footer */}
      <Footerlandingpage />
    </main>
  )
}