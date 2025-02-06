import React from 'react'
import Image from 'next/image'
const Circlepmi = () => {
  return (
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
  )
}

export default Circlepmi