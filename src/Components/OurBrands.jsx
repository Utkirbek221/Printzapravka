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
  return (
    <div className='min-h-[600px] bg-[#FFFFFF] py-20'>
      <div className='container mx-auto px-4'>
        <h2 data-aos="fade-up" className='text-[32px] font-bold text-center mb-4'>Наши Бренды</h2>
        <div className='h-[2px] w-[50%] mx-auto bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-16'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto'>
          {/* First Row */}
          <div data-aos="fade-right" data-aos-delay="100" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={canon} alt="Canon" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="200" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={epson} alt="Epson" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="300" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={hp} alt="HP" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>

          {/* Second Row */}
          <div data-aos="fade-right" data-aos-delay="400" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={kyocera} alt="Kyocera" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="500" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={oki} alt="OKI" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="600" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={samsung} alt="Samsung" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>

          {/* Third Row */}
          <div data-aos="fade-right" data-aos-delay="700" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={xerox} alt="Xerox" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="800" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={pantum} alt="Pantum" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
          
          <div data-aos="fade-right" data-aos-delay="900" className='w-[300px] h-[113px] mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 group'>
            <img src={ricoh} alt="Ricoh" className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' />
          </div>
        </div>
      </div>
    </div>
  )
}
