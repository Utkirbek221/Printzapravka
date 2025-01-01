import React from 'react'
import canon from '../IMG/Canon.png'
import epson from '../IMG/EpsonLogo.png'
import hp from '../IMG/Hp.png'
import kyocera from '../IMG/Kyocera.png'
import oki from '../IMG/Oki.png'
import samsung from '../IMG/Samsung.png'
import xerox from '../IMG/Xerox.png'
import pantum from '../IMG/Panntum.png'
import ricoh from '../IMG/Ricon.png'

export default function OurBrands() {
  const brands = [
    { name: "Canon", img: canon },
    { name: "Epson", img: epson },
    { name: "HP", img: hp },
    { name: "Kyocera", img: kyocera },
    { name: "OKI", img: oki },
    { name: "Samsung", img: samsung },
    { name: "Xerox", img: xerox },
    { name: "Pantum", img: pantum },
    { name: "Ricoh", img: ricoh },
  ];
  
  return (
    <div className='min-h-[600px] bg-[#FFFFFF] py-20'>
      <div className='container mx-auto px-4'>
        <h2 data-aos="fade-up" className='text-[32px] font-bold text-center mb-4 max-md:text-[26px]'>Наши Бренды</h2>
        <div className='h-[2px] w-[50%] mx-auto bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-16'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto'>
          {brands.map((brand, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
              className=' mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'
            >
              <img
                src={brand.img}
                alt={brand.name}
                className='w-full h-full max-md:w-[180px] max-md:h-[70px] object-contain group-hover:scale-110 transition-transform duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
