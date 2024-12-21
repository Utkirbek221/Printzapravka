import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMain() {
    return (
        <div className='min-h-[500px] md:min-h-[700px] lg:min-h-[864px] flex justify-center items-center' style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #BFDBFE 100%)' }}>
            <div className='container'>
                <div className='group bg-white rounded-3xl shadow-lg py-[24px] md:py-[36px] lg:py-[48px] px-[20px] md:px-[60px] lg:px-[130px] transition-all duration-300 hover:scale-[1.06] mx-4'>
                    {/* О нас */}
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 lg:mb-8'>О нас</h1>
                    <hr className='max-w-[755px] h-[2px] mx-auto mb-4 md:mb-6 lg:mb-8' style={{ background: 'linear-gradient(90deg, #14B8A6 0%, #2563EB 100%)' }} />
                    <div className='mb-8 md:mb-12 lg:mb-16' data-aos="fade-right" data-aos-delay="100">
                        <span className='text-[#2563EB] font-bold text-sm md:text-base'>"TAFAKKUR XIZMAT SAMARASI" MChJ</span>
                        <span className='text-gray-700 text-sm md:text-base'> — это динамично развивающаяся компания, которая уже несколько лет успешно работает в сфере обслуживания офисной техники, обеспечивая клиентов надежными и качественными услугами. Мы специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые сложные задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание оборудования.</span>
                    </div>

                    {/* Наши ценности и подход */}
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 lg:mb-8'>Наши ценности и подход</h2>
                    <hr className='max-w-[755px] h-[2px] mx-auto mb-4 md:mb-6 lg:mb-8' style={{ background: 'linear-gradient(90deg, #14B8A6 0%, #2563EB 100%)' }} />
                    <div className='mb-4 md:mb-6 lg:mb-8' data-aos="fade-right" data-aos-delay="300">
                        <p className='text-gray-700 text-sm md:text-base'>Мы понимаем, что исправная работа офисной техники играет важную роль в успешной работе любой компании. Наша цель — обеспечить бесперебойную и качественную работу ваших принтеров и других устройств. Мы гордимся индивидуальным подходом к каждому клиенту и стремимся находить решения, которые полностью удовлетворяют потребности и требования наших партнеров. Придерживаясь высоких стандартов работы, мы используем только проверенные материалы и современные технологии, чтобы гарантировать долговечность и эффективность наших услуг.</p>
                    </div>

                    {/* Узнать больше кнопка */}
                    <div className='flex justify-center'>
                        <Link to={'/about'}>
                            <button data-aos="fade-left" className='px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 text-[#2563EB] border border-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors duration-300 text-sm md:text-base'>
                                Узнать больше
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
