import React, { useState, useEffect } from 'react'
import epson from '../IMG/epson.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Main() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width - 0.5) * 100;
    const y = ((e.clientY - container.top) / container.height - 0.5) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='min-h-[710px] bg-gradient-to-r from-[#1B2838] to-[#2A3F54]'>
        <div className='container px-5 flex flex-col lg:flex-row justify-evenly items-center h-full pt-[96px] pb-10 lg:pb-0'>
          <div className='w-full lg:max-w-[600px] lg:mr-8'>
            <p 
              data-aos="fade-right" 
              className='font-bold text-[#818CF8] text-[15px] sm:text-[17px] uppercase max-md:text-center max-lg:text-center'
            >
              Надежность и качество
            </p>
            <h1 
              data-aos="fade-right" 
              className='max-md:text-[29px] max-md:leading-[37px] max-md:text-center max-lg:text-center max-lg:text-[46px] max-lg:leading-[48px] text-white font-bold text-[47px] text-start leading-[48px] mt-[24px] mb-[24px]'
            >
              Ремонт и заправка картриджей. Оперативный выезд мастера на дом и в офис!
            </h1>
            <p 
              data-aos="fade-up" 
              className='text-[#D1D5DB] text-[13px] max-md:text-[15px] leading-[26px] mb-8 max-md:text-center max-lg:text-center max-lg:max-w-[450px] max-lg:mx-auto max-w-[450px]'
            >
              Предлагаем качественный ремонт принтеров, компьютеров, моноблоков и другой офисной техники, а также заправку картриджей с гарантией.
            </p>
            <div 
              className='flex max-md:justify-center max-md:items-center max-lg:justify-center max-lg:items-center gap-4 sm:gap-4 mb-[24px]' 
            > 
            <Link to={'/register'}>
              <button 
                data-aos="fade-right" 
                className='rounded-[8px] text-white hover:bg-[#7275f5] transition-colors duration-300 font-bold text-[15px] bg-[#818CF8] w-[192px] h-[52px] max-md:w-[143px] max-md:min-h-[46px]'
              >
                Заказать ремонт
              </button>
            </Link>
            <Link to={'/about'}>            
              <button 
                data-aos="fade-left"  
                className='rounded-[8px] text-[#A5B4FC] hover:bg-[#818CF8] hover:text-white transition-colors duration-300 font-bold text-[15px] bg-transparent border-2 border-[#818CF8] w-[192px] h-[52px] max-md:w-[143px] max-md:min-h-[46px]'
              >
                Заказать заправку
              </button>
            </Link>
            </div>
          </div>
          <div 
            className='w-[450px] h-[450px] max-md:w-[300px] max-md:h-[300px] flex justify-center items-center max-md:bg-transparent md:shadow-[0px_25px_50px_-12px_#00000040] md:rounded-[16px] md:bg-gradient-to-br md:from-[#1f3347] md:to-[#2d4359] overflow-hidden shrink-0'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={epson} 
              alt="Epson printer" 
              className='w-[450px] max-md:min-w-[380px] h-auto transition-transform duration-[1s] ease-out'
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
