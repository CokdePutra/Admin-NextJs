"use client";
import Navbar from "@/components/navbar/navbar";
import AnggotaCard from "@/components/Cards/AnggotaCard";

const anggotaData = [
  {
    name: "Cokde",
    kontak: "123-456-789",
    periode: "2025/2026",
    gambar: "/images/user/cokde.jpg",
  },
  {
    name: "Kanha",
    kontak: "987-654-321",
    periode: "2025/2026",
    gambar: "/images/user/kanha.jpg",
  },
  {
    name: "Cokde",
    kontak: "123-456-789",
    periode: "2025/2026",
    gambar: "/images/user/cokde.jpg",
  },
  {
    name: "Kanha",
    kontak: "987-654-321",
    periode: "2025/2026",
    gambar: "/images/user/kanha.jpg",
  },
  {
    name: "Cokde",
    kontak: "123-456-789",
    periode: "2025/2026",
    gambar: "/images/user/cokde.jpg",
  },
  {
    name: "Kanha",
    kontak: "987-654-321",
    periode: "2025/2026",
    gambar: "/images/user/kanha.jpg",
  },
  {
    name: "Cokde",
    kontak: "123-456-789",
    periode: "2025/2026",
    gambar: "/images/user/cokde.jpg",
  },
  {
    name: "Kanha",
    kontak: "987-654-321",
    periode: "2025/2026",
    gambar: "/images/user/kanha.jpg",
  },
  {
    name: "Cokde",
    kontak: "123-456-789",
    periode: "2025/2026",
    gambar: "/images/user/cokde.jpg",
  },
  {
    name: "Kanha",
    kontak: "987-654-321",
    periode: "2025/2026",
    gambar: "/images/user/kanha.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-15 flex min-h-screen flex-col items-center justify-between p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {anggotaData.map((anggota, index) => (
            <AnggotaCard
              key={index}
              gambar={anggota.gambar}
              name={anggota.name}
              kontak={anggota.kontak}
              periode={anggota.periode}
            />
          ))}
        </div>
      </main>
    </>
  );
}
