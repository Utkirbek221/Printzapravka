import React from 'react'

export default function About() {
  
  return (
    <div className='min-h-[710px] bg-gradient-to-r from-[#1B2838] to-[#2A3F54] py-20'>
      <div className='container mx-auto px-5'>
        <h2 className='text-white text-center text-[32px] font-bold mb-4 '>О наша компания</h2>
        <hr className='mb-3 opacity-[.1]'/>
        <div className='bg-white rounded-2xl p-8 mb-16'>
          <div className='w-full h-[2px] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-8'></div>
          
          <p className='text-[#1F2937] text-lg mb-8'>
            <span className='font-bold text-[#1E40AF]'>"TAFAKKUR XIZMAT SAMARASI" MChJ</span> — это динамично развивающаяся компания, которая уже несколько лет 
            успешно работает в сфере обслуживания офисной техники, обеспечивая клиентов надежными и качественными 
            услугами. Мы специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании 
            принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые сложные 
            задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание оборудования.
          </p>
          
          <div className='w-full h-[2px] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-2xl p-8 text-center'>
            <h3 className='text-[#1E40AF] text-xl font-bold mb-4'>Профессиональная команда</h3>
            <p className='text-[#4B5563]'>
              Мы гордимся нашей командой, которая всегда готова прийти на помощь.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 text-center'>
            <h3 className='text-[#059669] text-xl font-bold mb-4'>Современные технологии</h3>
            <p className='text-[#4B5563]'>
              Мы используем только самые современные решения для обеспечения высокого качества.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 text-center'>
            <h3 className='text-[#D97706] text-xl font-bold mb-4'>Надежность и качество</h3>
            <p className='text-[#4B5563]'>
              Наша цель — обеспечить ваших клиентов надежной техникой с максимальным сроком службы.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
