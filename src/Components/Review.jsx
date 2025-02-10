import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import person1 from '../IMG/imgperson.jpeg'
import person2 from '../IMG/imgperson2.webp'
import person3 from '../IMG/imgperson3.webp'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const reviews = [
    {
        id: 1,
        name: 'Достон',
        surname: 'Ерназаров',
        image: person1,
        text: 'После того как мой принтер начал давать сбои, я обратился в эту компанию. Принтер починили быстро и качественно, теперь он работает как новый. Очень доволен обслуживанием, буду рекомендовать всем!'
    },
    {
        id: 2,
        name: 'Дилноза',
        surname: 'Назарова',
        image: person2,
        text: 'Заправка картриджа в этой компании — это всегда быстро и без проблем. Мой принтер работает отлично, а заправка картриджа в разы дешевле, чем покупка нового. Спасибо за отличный сервис!'
    },
    {
        id: 3,
        name: 'Шухрат',
        surname: 'Абдуманнопов',
        image: person3,
        text: 'Мой плоттер перестал работать должным образом, и я обратился сюда. Специалисты быстро нашли причину и починили его. Теперь он печатает идеально, я я доволен качеством работы!'
    },
    {
        id: 4,
        name: 'Шухрат',
        surname: 'Абдуманнопов',
        image: person3,
        text: 'Мой плоттер перестал работать должным образом, и я обратился сюда. Специалисты быстро нашли причину и починили его. Теперь он печатает идеально, я я доволен качеством работы!'
    }
]

export default function Review() {
    return (
        <div className='min-h-[600px] bg-[#1F2937] py-20'>
            <div className='container mx-auto px-4'>
                <h2 className='text-[32px] font-bold text-white text-center mb-16'>Отзыв клиентов</h2>

                <div className='relative'>
                    <Swiper
                        navigation={{
                            prevEl: ".prevarrow",
                            nextEl: ".nextarrow",
                        }}
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className='py-10'
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className='rounded-[20px] p-6 h-full relative bg-[#1E1B4B]/40 backdrop-blur-[32px]'>
                                    <div className='flex items-center gap-4 mb-8'>
                                        <div className='w-14 h-14 rounded-full overflow-hidden ring-[3px] ring-[#EC4899]'>
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                        <div>
                                            <h3 className='text-white text-xl font-semibold'>{review.name}</h3>
                                            <p className='text-gray-400 text-lg'>{review.surname}</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-[2px] bg-gradient-to-r from-[#EC4899] to-transparent mb-8'></div>
                                    <p className='text-gray-300 text-base leading-relaxed'>{review.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className='flex justify-center gap-4 mt-8'>
                        <button className='prevarrow'>
                            <BsArrowLeft className='text-[36px] text-[#FFFFFF]'/>
                        </button>
                        <button className='nextarrow'>
                            <BsArrowRight className='text-[36px] text-[#FFFFFF]'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
