import React from "react";
import Image from "next/image";

interface AnggotaCardProps {
  name: string;
  kontak: string;
  periode: string; // Add optional price prop
  gambar: string;
}

const AnggotaCard: React.FC<AnggotaCardProps> = ({
  name,
  kontak,
  periode,
  gambar,
}) => {
  return (
    <>
      <div className="w-70 rounded-lg bg-gray-200 px-4 py-4 text-center shadow-md transition duration-300 ease-in-out hover:shadow-lg">
        <div className="relative mb-4 h-60 w-full">
          <Image
            src={gambar}
            alt={name}
            fill
            className="overflow-hidden rounded-lg object-cover"
          />
        </div>
        <h3 className="mt-4 text-2xl font-medium text-gray-900">{name}</h3>
        <p className="text-gray-700">{kontak}</p>
        {periode && <p className="text-gray-500">{periode}</p>}
      </div>
    </>
  );
};

export default AnggotaCard;
