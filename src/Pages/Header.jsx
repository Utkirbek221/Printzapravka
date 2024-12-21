import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../IMG/LogoHeader.png'
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 bg-[rgb(27,40,56)] z-50 shadow-lg'>
        <div className='container mx-auto px-5'>
          <div className='h-[80px] flex justify-between items-center'>
            <Link to={'/'}>
              <img src={logo} alt="" className='w-[140px] h-[68.8px]' />
            </Link>
            <div>
              <ul className='hidden md:flex gap-5 text-[#D4D4D8] justify-center items-center text-[15px]'>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О нас</Link>
                <Link to={'/services'}>Услуги</Link>
                {/* <li>Продажа и Бренды</li> */}
                <Link to={'/register'}>
                  <button className='border-[2px] border-[#6366F1] w-[180px] h-[40px] rounded-[6px] text-[#FFFFFF] hover:cursor-pointer hover:bg-[#6366F1] transition-colors duration-300'>Вызвать мастера</button>
                </Link>
              </ul>
              {/* Mobile Menu Button */}
              <div className='md:hidden text-white text-2xl cursor-pointer transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
                <div className='relative w-6 h-6'>
                  <FiMenu className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <FiX className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </div>
              {/* Mobile Menu */}
              <div className={`md:hidden z-[999] fixed top-[80px] right-0 w-[250px] h-screen bg-gradient-to-r from-[#1B2838] to-[#2A3F54] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-5 text-[#D4D4D8] p-5 text-[15px]'>
                  <Link to={'/'} className='cursor-pointer hover:text-[#6366F1]'>Главная</Link>
                  <Link to={'/about'} className='cursor-pointer hover:text-[#6366F1]'>О нас</Link>
                  <Link to={'/services'} className='cursor-pointer hover:text-[#6366F1]'>Услуги</Link>
                  <li className='cursor-pointer hover:text-[#6366F1]'>Продажа и Бренды</li>
                  <Link to={'/register'}>
                    <button className='border-[2px] border-[#6366F1] w-full h-[40px] rounded-[6px] text-[#FFFFFF] hover:cursor-pointer hover:bg-[#6366F1] transition-colors duration-300'>Вызвать мастера</button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from going under fixed header */}
      <div className='h-[80px]'></div>
    </>
  )
}
