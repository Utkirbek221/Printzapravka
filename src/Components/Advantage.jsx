import React from 'react'
import printerImg from '../IMG/epsonBgQora.png'
import { FaTruckFast } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import { BiCheckCircle } from 'react-icons/bi'
import { FaTools } from 'react-icons/fa'
import OurServices from './OurServices'
import OurBrands from './OurBrands'

export default function Advantage() {
    return (
        <>
        <div className='min-h-[600px] py-16 bg-[#FFFFFF] relative'>
            <div className='container'>
                {/* Printer image - hidden on mobile */}
                <div className='absolute flex justify-start items-center max-lg:hidden'>
                    <img src={printerImg} alt="Printer" className='opacity-[70%] z-[8] w-[500px] h-[500px] mt-[150px]' />
                </div>
            </div>
            <div className='container flex justify-center items-center flex-col'>
                <h2 data-aos="fade-up" className='text-[32px] font-bold text-center mb-4'>Наши Преимущество</h2>
                <hr className='h-[2px] w-[50%] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-10' />

                <div className='flex justify-between items-center gap-10 z-[9] '>
                    <div className='flex-1 flex flex-col gap-[40px] lg:ml-[150px] max-lg:ml-0 max-lg:items-center'>
                        {/* Fast arrival */}
                        <div data-aos="fade-right" className='bg-[#ece5f0] rounded-xl p-4 flex items-start gap-4 w-full max-w-[450px] h-[108px] lg:ml-[-100px] max-lg:ml-0 transition-all duration-300'>
                            <div className='min-w-[64px] min-h-[64px] rounded-[100%] flex items-center justify-center' style={{background: 'linear-gradient(90deg, #A855F7 0%, #6366F1 100%)'}}>
                                <FaTruckFast className='text-[#FFFF] w-8 h-8'/>
                            </div>
                            <div>
                                <h3 className='text-[18px] font-semibold mb-1'>Быстрый выезд</h3>
                                <p className='text-gray-600'>Можете доверять мы Придем к вам в течение <span className='text-[#8B5CF6]'>3 часов</span></p>
                            </div>
                        </div>

                        {/* Cartridge refill */}
                        <div data-aos="fade-right" className='bg-[#ece5f0] rounded-xl p-4 flex items-start gap-4 w-full max-w-[450px] h-[108px] lg:ml-[-30px] max-lg:ml-0 transition-all duration-300'>
                            <div className='min-w-[64px] min-h-[64px] rounded-[100%] flex items-center justify-center' style={{background: 'linear-gradient(90deg, #A855F7 0%, #6366F1 100%)'}}>
                                <IoMdTime className='text-[#FFFF] w-8 h-8'/>
                            </div>
                            <div>
                                <h3 className='text-[18px] font-semibold mb-1'>Заправка картриджей</h3>
                                <p className='text-gray-600'>Максимально быстрая заправка картриджа <span className='text-[#8B5CF6]'>15 минут</span></p>
                            </div>
                        </div>

                        {/* Product warranty */}
                        <div data-aos="fade-right" className='bg-[#ece5f0] rounded-xl p-4 flex items-start gap-4 w-full max-w-[450px] h-[108px] lg:ml-[40px] max-lg:ml-0 transition-all duration-300'>
                            <div className='min-w-[64px] min-h-[64px] rounded-[100%] flex items-center justify-center' style={{background: 'linear-gradient(90deg, #A855F7 0%, #6366F1 100%)'}}>
                                <BiCheckCircle className='text-[#FFFF] w-8 h-8'/>
                            </div>
                            <div>
                                <h3 className='text-[18px] font-semibold mb-1'>Гарантия на товар</h3>
                                <p className='text-gray-600'>Используем только оригинальные картриджи и тонеры <span className='text-[#8B5CF6]'>1 месяцев</span></p>
                            </div>
                        </div>

                        {/* Operational support */}
                        <div data-aos="fade-right" className='bg-[#ece5f0] rounded-xl p-4 flex items-start gap-4 w-full max-w-[450px] h-[108px] lg:ml-[100px] max-lg:ml-0 transition-all duration-300'>
                            <div className='min-w-[64px] min-h-[64px] rounded-[100%] flex items-center justify-center' style={{background: 'linear-gradient(90deg, #A855F7 0%, #6366F1 100%)'}}>
                                <FaTools className='text-[#FFFF] w-8 h-8'/>
                            </div>
                            <div>
                                <h3 className='text-[18px] font-semibold mb-1'>Оперативная поддержка</h3>
                                <p className='text-gray-600'>Быстро решаем вопросы и устраняем неполадки <span className='text-[#8B5CF6]'>24 часа</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <OurServices/>
        <OurBrands/>
        </>
    )
}
