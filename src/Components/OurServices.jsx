import React, { useState } from 'react';
import printer from '../IMG/epsonBiz.png';
import laptop from '../IMG/noteBiz.png';
import shredder from '../IMG/kompBiz.png';
import termoprint from '../IMG/chekBiz.png';
import plotter from '../IMG/plakatBiz.png';
import computer from '../IMG/KompBiz2.png';

export default function OurServices() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            img: printer,
            title: 'Все бренды',
            subtitle: 'РЕМОНТ МФУ принтеров',
            description: 'Подробная информация о ремонте МФУ принтеров...',
        },
        {
            id: 2,
            img: laptop,
            title: 'Ремонт ноутбуков всех марок и моделей.',
            subtitle: 'РЕМОНТ Ноутбуков',
            description: 'Подробная информация о ремонте ноутбуков...',
        },
        {
            id: 3,
            img: shredder,
            title: 'Решение проблемы. Ремонт и обслуживание шредеров.',
            subtitle: 'РЕМОНТ Шредеров',
            description: 'Подробная информация о ремонте шредеров...',
        },
        {
            id: 4,
            img: termoprint,
            title: 'С гарантией',
            subtitle: 'РЕМОНТ Термопринт',
            description: 'Подробная информация о ремонте термопринтов...',
        },
        {
            id: 5,
            img: plotter,
            title: 'Любая сложность',
            subtitle: 'РЕМОНТ Плоттеров',
            description: 'Подробная информация о ремонте плоттеров...',
        },
        {
            id: 6,
            img: computer,
            title: 'Установка Windows программы.',
            subtitle: 'РЕМОНТ КОМПЬЮТЕРОВ',
            description: 'Подробная информация о ремонте компьютеров...',
        },
    ];

    return (
        <div className='min-h-[710px] bg-[white] py-20'>
            <div className='container mx-auto px-5 flex justify-center items-center flex-col'>
                <h2 data-aos="fade-up" className='text-center text-[32px] font-bold mb-4'>Наши Услуги</h2>
                <div className='h-[2px] w-[40%] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mb-16'></div>

                <div className='grid grid-cols-3 gap-8 max-md:grid-cols-1'>
                    {services.map((service, index) => (
                        <div
                            data-aos="fade-right"
                            data-aos-delay={`${(index + 1) * 100}`}
                            key={service.id}
                            className='w-full h-[250px] relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:rotate-[10deg]'
                        >
                            <img src={service.img} alt={service.subtitle} className='w-full h-full object-cover' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300'>
                                <h3 className='text-white font-bold mb-2'>{service.title}</h3>
                                <p className='text-white text-xl font-bold mb-4'>{service.subtitle}</p>
                                <button
                                    onClick={() => setActiveService(service.id)}
                                    className='bg-[#1f2937]/80 text-white w-fit px-6 py-2 rounded-lg hover:bg-[#374151] transition-colors duration-300'
                                >
                                    Подробнее
                                </button>
                            </div>

                            {activeService === service.id && (
                                <div
                                    className={`absolute inset-0 bg-[rgb(27,40,56)]/90 p-8 rounded-lg transform scale-100 transition-transform duration-500`}
                                >
                                    <button
                                        onClick={() => setActiveService(null)}
                                        className='absolute top-4 right-4 text-white text-2xl font-bold'
                                    >
                                        &times;
                                    </button>
                                    <h3 className='text-2xl font-bold text-white mb-4'>{service.subtitle}</h3>
                                    <p className='text-gray-300 mb-4'>{service.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
