import React from 'react'
import printer from '../IMG/epsonBiz.png'
import laptop from '../IMG/noteBiz.png'
import shredder from '../IMG/kompBiz.png'
import termoprint from '../IMG/chekBiz.png'
import plotter from '../IMG/plakatBiz.png'
import computer from '../IMG/KompBiz2.png'

export default function OurServices() {
    return (
        <div className='min-h-[710px] bg-[white] py-20'>
            <div className='max-w-[1100px] mx-auto px-5 flex justify-center items-center flex-col'>
                <h2 className='text-center text-[32px] font-bold mb-4'>Наши Услуги</h2>
                <div className='h-[2px] w-[50%] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-16'></div>

                <div className='grid grid-cols-3 gap-8 max-md:grid-cols-1'>
                    {/* MFU Printers */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={printer} alt="Printer" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>Все бренды</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ МФУ принтеров</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    {/* Laptops */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={laptop} alt="Laptop" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>Ремонт ноутбуков всех марок и моделей.</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ Ноутбуков</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    {/* Shredders */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={shredder} alt="Shredder" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>Решение проблемы. Ремонт и обслуживание шредеров.</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ Шредеров</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    {/* Termoprint */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={termoprint} alt="Termoprint" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>С гарантией</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ Термопринт</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    {/* Plotters */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={plotter} alt="Plotter" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>Любая сложность</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ Плоттеров</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>

                    {/* Computers */}
                    <div className='w-full h-[250px] relative group rounded-2xl overflow-hidden'>
                        <img src={computer} alt="Computer" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                            <h3 className='text-white font-bold mb-2'>Установка Windows программы.</h3>
                            <p className='text-white text-xl font-bold mb-4'>РЕМОНТ КОМПЬЮТЕРОВ</p>
                            <button className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
