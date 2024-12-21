import React from 'react'
import bgimg from '../IMG/epsonBg.png'
import bgBlur from '../IMG/RanglarBg.png'

export default function Plotter() {
    return (
        <div className='min-h-[1200px] max-md:min-h-[400px]  max-lg:min-h-[700px] flex justify-center items-center w-full' 
        style={{background: 'linear-gradient(90deg, #1B2838 0%, #2A3F54 100%)'}}>
            <div className='w-[55%]'>
                <img className='opacity-[0.8]' src={bgBlur} alt="" />
            </div>
            <div className='w-[45%]'>
                <img src={bgimg} alt="" />
            </div>
            <div className='absolute container flex flex-col justify-center items-center max-md:max-w-[760px]'>
                <h1
                    style={{
                        textShadow: `
                       -1px 1px 2px rgba(0,0,0,0.8),
                        1px -1px 2px rgba(0,0,0,0.8),
                         -1px -1px 2px rgba(0,0,0,0.8),
                          1px 1px 2px rgba(0,0,0,0.8)
                                    `
                    }}
                    className="text-center text-[58px] font-[700] leading-[60px]  text-[#FFFFFF] max-md:text-[23px] max-md:leading-[32px]">
                    Ремонт Plotter принтеров
                    с гарантией качества!
                </h1>
                <p style={{
                    textShadow: `
                       -1px 1px 2px rgba(0,0,0,0.8),
                        1px -1px 2px rgba(0,0,0,0.8),
                         -1px -1px 2px rgba(0,0,0,0.8),
                          1px 1px 2px rgba(0,0,0,0.8)
                                    `
                }}
                    className='text-center text-[#FFFFFF] text-[18px] font-[400] leading-[28px] max-md:text-[14px] max-md:leading-[26px] '>
                    Мы обеспечим надежный ремонт и обслуживание вашего Plotter принтера, чтобы он снова работал как новый.
                </p>
            </div>
        </div>
    )
}
