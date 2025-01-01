import React from 'react'
import mono from '../IMG/imgUsta.jpeg'
import struyni from '../IMG/imgUsta2.jpeg'
import contact from '../IMG/imgUsta3.jpeg'
import lazer from '../IMG/imgUsta4.png'
import cartridge from '../IMG/imgUsta5.jpeg'

const buttonTextStyle = {
  fontSize: '11.63px',
  fontWeight: 700,
  lineHeight: '18px',
  textAlign: 'center'
}

const data = [
  {
    imgSrc: mono,
    alt: "Монохромные",
    buttonText: "ЗАПРАВКА МОНОХРОМНЫЕ\nЛАЗЕРНЫЕ КАРТРИДЖЕЙ",
    extraText: "Связаться с нами"
  },
  {
    imgSrc: struyni,
    alt: "Струйные",
    buttonText: "ЗАПРАВКА СТРУЙНЫЕ\nЦВЕТНЫЕ КАРТРИДЖЕЙ",
    extraText: "Связаться с нами"
  },
  {
    imgSrc: contact,
    alt: "Связаться",
    buttonText: "Связаться с нами",
    extraText: "Связаться с нами"
  },
  {
    imgSrc: lazer,
    alt: "Лазерные",
    buttonText: "ЗАПРАВКА ЦВЕТНЫЕ\nЛАЗЕРНЫЕ КАРТРИДЖЕЙ",
    extraText: "Связаться с нами"
  },
  {
    imgSrc: cartridge,
    alt: "Продажа",
    buttonText: "ПРОДАЖА КАРТРИДЖЕЙ",
    extraText: "Связаться с нами"
  }
];

export default function WeCan() {
  return (
    <div className='min-h-[280px] bg-[#FFFFFF] flex justify-center items-center py-[60px]'>
      <div className='container mx-[60px] px-[60px]'>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          {data.map((item, index) => (
            <div key={index} className='relative group w-[220px] max-w-[270px] h-[120px] rounded-xl overflow-hidden cursor-pointer'>
              <img src={item.imgSrc} alt={item.alt} className='w-full h-full object-cover transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-125' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className=' absolute inset-0 flex flex-col justify-end items-center'>
                <div style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #6366F1 100%)' }} className='min-w-[209px] h-[52px] flex items-center justify-center text-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 shadow-lg'>
                  <p style={buttonTextStyle}>{item.buttonText}</p>
                </div>
              </div>
              <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                <span className='text-white text-lg font-medium'>{item.extraText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
