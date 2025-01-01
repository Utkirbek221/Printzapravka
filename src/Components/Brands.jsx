import React from 'react';
import canon from '../IMG/Canon.png';
import epson from '../IMG/EpsonLogo.png';
import hp from '../IMG/Hp.png';
import kyocera from '../IMG/Kyocera.png';
import oki from '../IMG/Oki.png';
import samsung from '../IMG/Samsung.png';
import xerox from '../IMG/Xerox.png';
import pantum from '../IMG/Panntum.png';
import ricoh from '../IMG/Ricon.png';

const brandsList = [
    {
        img: canon,
        name: 'Canon',
        text: 'Мы уже более 10 лет предоставляем услуги по ремонту принтеров и заправке картриджей Canon. Работаем с оригинальными комплектующими и знаем все нюансы продукции Canon, что позволяет нам обеспечивать надежность и высокое качество ремонта.'
    },
    {
        img: epson,
        name: 'Epson',
        text: 'Специалисты нашей компании имеют большой опыт в обслуживании и ремонте принтеров Epson. Мы выполняем диагностику, ремонт и заправку картриджей, предлагая качественное обслуживание и оригинальные расходные материалы.'
    },
    {
        img: hp,
        name: 'HP',
        text: 'Мы являемся экспертами в ремонте принтеров и заправке картриджей HP. В нашей практике – сотни успешных ремонтов, что позволяет нам предложить надежные и быстрые решения для принтеров HP.'
    },
    {
        img: kyocera,
        name: 'Kyocera',
        text: 'Специализируясь на ремонте принтеров KYOCERA, мы гарантируем качественное и профессиональное обслуживание. Мы используем проверенные комплектующие и тщательно диагностируем каждое устройство для наилучшего результата.'
    },
    {
        img: oki,
        name: 'OKI',
        text: 'Уже много лет мы работаем с принтерами OKI, предоставляя качественные услуги по ремонту и заправке картриджей. Наш опыт позволяет восстанавливать устройства OKI до заводских стандартов, обеспечивая надежную и долговечную работу.'
    },
    {
        img: samsung,
        name: 'Samsung',
        text: 'Мы успешно работаем с принтерами Samsung, предлагая полный спектр услуг по их ремонту и обслуживанию. Благодаря использованию качественных деталей и нашему опыту мы гарантируем долговечность каждого отремонтированного устройства.'
    },
    {
        img: xerox,
        name: 'Xerox',
        text: 'Более десяти лет мы работаем с принтерами Xerox, предоставляя услуги по их ремонту и заправке картриджей. Наша команда справляется с любыми неисправностями, возвращая устройствам высокое качество печати.'
    },
    {
        img: pantum,
        name: 'Pantum',
        text: 'Мы также предлагаем услуги по ремонту и заправке картриджей принтеров Pantum. Благодаря нашим знаниям и оригинальным деталям мы помогаем продлить срок службы устройств и сохранить их эффективность.'
    },
    {
        img: ricoh,
        name: 'Ricoh',
        text: 'Наша компания успешно обслуживает принтеры Ricoh, выполняя полную диагностику и ремонт. Мы знаем все тонкости техники Ricoh и обеспечиваем надежное обслуживание, которое возвращает устройствам высокое качество печати.'
    }
];

export default function Brands() {
    return (
        <div className='bg-[rgb(27,40,56)]'>
            <div className='container mx-auto'>
                <h2 className='text-[32px] font-bold text-center text-white pt-10 pb-4'>Продажа и Бренды</h2>
                <div className='h-[1px] w-[100%] mx-auto bg-[#6c6c6c] mb-16'></div>
                <div className='max-md:w-[85%] max-lg:w-[85%] w-[75%] mx-auto flex flex-wrap justify-center items-center gap-8 p-4'>
                    {brandsList.map((brand, index) => (
                        <div 
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"  
                            key={index} 
                            className='text-[#FFFFFF] flex flex-col md:flex-row gap-6 items-center md:items-start p-4 rounded-xl bg-[#2A3F54]  md:w-auto'>
                            <div className='flex justify-center items-center rounded-lg min-w-[50%] max-md:w-full min-h-[250px] bg-gradient-to-l from-[#5e6369] via-[#0F1923] to-[rgba(25,25,35,40)]'>
                                <img src={brand.img} alt={brand.name} className='w-[150px] md:w-[200px] h-[50px]  object-contain' />
                            </div>
                            <div className=''>
                                <h3 className='text-lg  font-[600] mb-[15px]'>Партнерство с <span className='text-[#ff2525]'>{brand.name}</span></h3>
                                <p className='text-[#FFFFFF]'>{brand.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
