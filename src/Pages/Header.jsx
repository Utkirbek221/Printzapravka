import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../IMG/LogoHeader.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 bg-[rgb(27,40,56)] z-50 shadow-lg'>
        <div className='container mx-auto px-5'>
          <div className='h-[80px] flex justify-between items-center'>
            <Link to={'/'} onClick={scrollToTop}>
              <img src={logo} alt="" className='w-[140px] h-[68.8px]' />
            </Link>
            <div>
              <ul className='hidden md:flex gap-5 text-[#D4D4D8] justify-center items-center text-[15px]'>
                <Link to={'/'} className='hover:font-[600] hover:scale-110 transition-transform duration-200' onClick={scrollToTop}>Главная</Link>
                <Link to={'/about'} className='hover:font-[600] hover:scale-110 transition-transform duration-200' onClick={scrollToTop}>О нас</Link>
                <Link to={'/services'} className='hover:font-[600] hover:scale-110 transition-transform duration-200' onClick={scrollToTop}>Услуги</Link>
                <Link to={'/brands'}>
                  <li className='hover:font-[600] hover:scale-110 transition-transform duration-200' onClick={scrollToTop}>Продажа и Бренды</li>
                </Link>
                <Link to={'/register'}>
                  <button className='border-[2px] border-[#6366F1] w-[180px] h-[40px] rounded-[6px] text-[#FFFFFF] hover:font-[600] hover:scale-110 transition-transform duration-200' onClick={scrollToTop}>
                    Вызвать мастера
                  </button>
                </Link>
              </ul>
              {/* Mobile Menu Button */}
              <div className='md:hidden text-white text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='relative w-6 h-6'>
                  <FiMenu className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <FiX className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </div>
              {/* Mobile Menu */}
              <div ref={menuRef} className={`md:hidden fixed top-[80px] right-0 w-[250px] h-screen bg-gradient-to-r from-[#1B2838] to-[#2A3F54] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-5 text-[#D4D4D8] p-5'>
                  <Link to={'/'} onClick={() => { setIsOpen(false); scrollToTop(); }} className='hover:text-[#6366F1]'>Главная</Link>
                  <Link to={'/about'} onClick={() => { setIsOpen(false); scrollToTop(); }} className='hover:text-[#6366F1]'>О нас</Link>
                  <Link to={'/services'} onClick={() => { setIsOpen(false); scrollToTop(); }} className='hover:text-[#6366F1]'>Услуги</Link>
                  <Link to={'/brands'} onClick={() => { setIsOpen(false); scrollToTop(); }} className='hover:text-[#6366F1]'>Продажа и Бренды</Link>
                  <Link to={'/register'} onClick={() => { setIsOpen(false); scrollToTop(); }}>
                    <button className='border-[2px] border-[#6366F1] w-full h-[40px] rounded-[6px] text-[#FFFFFF] hover:bg-[#6366F1]'>Вызвать мастера</button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[80px]'></div>
    </>
  );
}
