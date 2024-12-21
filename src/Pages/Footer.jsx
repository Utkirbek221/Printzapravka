import React from 'react'
import logo from '../IMG/LogoHeader.png'

export default function Footer() {
  return (
    <footer className='bg-[#1B2838] text-white py-8 md:py-16'>
      <div className='container mx-auto px-4 md:px-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8'>
          {/* Logo section */}
          <div>
            <img src={logo} alt="Logo" className='w-[120px] md:w-[140px] h-auto mb-4' />
          </div>

          {/* Company section */}
          <div>
            <h3 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>Компания</h3>
            <ul className='space-y-1.5 md:space-y-2 text-[#D4D4D8] text-sm md:text-base'>
              <li>О нас</li>
              <li>Наши Преимущество</li>
              <li>Наши Услуги</li>
            </ul>
          </div>

          {/* Contacts section */}
          <div>
            <h3 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>Контакты</h3>
            <ul className='space-y-1.5 md:space-y-2 text-[#D4D4D8] text-sm md:text-base'>
              <li className='break-all'>tafakkurxizmatsamarasimchj@gmail.com</li>
              <li>+998940511494</li>
              <li className='font-bold mt-3 md:mt-4'>Адрес</li>
              <li>Сиргалийский район, махалля Номданак, улица Файзли, дом 11.</li>
            </ul>
          </div>

          {/* Call master section */}
          <div>
            <h3 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>Вызов мастера</h3>
            <p className='text-[#D4D4D8] mb-4 text-sm md:text-base'>
              Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и ремонта.
            </p>
            <button className='bg-[#374151] text-white px-4 md:px-6 py-2 rounded text-sm md:text-base hover:bg-[#4B5563] transition-colors duration-300'>
              На Выезд
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className='mt-8 md:mt-16 pt-6 md:pt-8 border-t border-[#374151] flex flex-col md:flex-row justify-between items-center text-[#D4D4D8] text-xs md:text-sm gap-2 md:gap-0'>
          <p> 2022 "TAFAKKUR XIZMAT SAMARASI" MChJ</p>
          <p>Created By <span className='text-[#8B5CF6]'>LIMSA</span></p>
        </div>
      </div>
    </footer>
  )
}
