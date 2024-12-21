import React from 'react'
import CountUp from 'react-countup'

export default function Info() {
  return (
    <div className='min-h-[348px] max-md:min-h-[600px] py-10'>
        <div data-aos="fade-right" className='container flex justify-center items-center flex-wrap gap-5'>
            <div className='flex-1 max-w-[320px] backdrop-blur-md bg-black/20 rounded-xl p-8 text-center'>
                <h2 className='text-[52px] font-bold text-white mb-3 font-["Orbitron"]'>
                    <CountUp end={6} duration={2} />
                </h2>
                <h3 className='text-[22px] font-medium text-white mb-2 font-["Orbitron"]'>ЛЕТ НА РЫНКЕ</h3>
                <p className='text-white text-[16px]'>Огромный опыт в ремонте и обслуживании принтеров</p>
                <hr className="w-full  mt-[30px] mb-[-15px]"/>
            </div>
            <div className='flex-1 max-w-[320px] backdrop-blur-md bg-black/20 rounded-xl p-8 text-center'>
                <h2 className='text-[52px] font-bold text-white mb-3 font-["Orbitron"]'>
                    <CountUp end={14000} duration={2} />
                </h2>
                <h3 className='text-[22px] font-medium text-white mb-2 font-["Orbitron"]'>ПРИНТЕРОВ ОТРЕМОНТИРОВАНО</h3>
                <p className='text-white text-[16px]'>Выполнено более 20 000 ремонтов принтеров</p>
                <hr className="w-full  mt-[30px] mb-[-15px]"/>
            </div>
            <div className='flex-1 max-w-[320px] backdrop-blur-md bg-black/20 rounded-xl p-8 text-center'>
                <h2 className='text-[52px] font-bold text-white mb-3 font-["Orbitron"]'>
                    <CountUp end={2500} duration={2} />
                </h2>
                <h3 className='text-[22px] font-medium text-white mb-2 font-["Orbitron"]'>ОТЗЫВОВ</h3>
                <p className='text-white text-[16px]'>Наши клиенты довольны качеством работы</p>
                <hr className="w-full  mt-[30px] mb-[-15px]"/>
            </div>
        </div>
    </div>
  )
}
