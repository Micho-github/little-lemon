import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
export default function Header() {

  const navLinks = [
    {
      name:"Home",
      path:"/",
    },
    {
      name:"About",
      path:"/about",
    },
    {
      name:"Menu",
      path:"/menu",
    },
    {
      name:"Reservations",
      path:"/reservations",
    },
    {
      name:"Order Online",
      path:"/order-online",
    },
  ]

  const [burgerClicked, setBurgerClicked] = useState(false);
  useEffect(() => {
    if (burgerClicked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerClicked]);

  return (
    <>
      <header className='fixed w-full top-0 left-0 z-10'>
        <nav className='flex px-4 py-3 justify-between items-center align-center bg-white min-h-24 text-center'>
          <img
            src={require('../Assets/images/logo.jpg')}
            loading='lazy'
            className='w-[250px] md:w-[350px] lg:w-[250px]'
            alt='Logo'
          />
          <button className='lg:hidden' onClick={() => setBurgerClicked(!burgerClicked)}>
            {burgerClicked ? (
              <XMarkIcon className='w-[50px] md:w-[80px]' color='black' />
            ) : (
              <Bars3Icon className='w-[50px] md:w-[80px]' color='black' />
            )}
          </button>
          <ul className='hidden lg:flex flex-row gap-5 font-monster text-xl'>
          {navLinks.map((link)=>
            <li>
              <button
              className='relative text-[#495E57] hover:translate-y-[2px] group py-5 text-center font-bold min-h-10'
              >
                {link.name}
                <div className='w-full h-1 bg-yellow-500 absolute bottom-0 left-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-700'/>
              </button>
            </li>
          )}
          </ul>
          <button className='hidden text-[#495E57] lg:block text-2xl bg-[#F4CE14] px-5 py-2 rounded-lg mr-10 font-monster font-bold shadow-lg hover:translate-y-[1px] hover:shadow-[#495E57]'>Login</button>
        </nav>
      </header>
      <div className={`z-10 fixed top-24 md:top-[120px] w-full bg-white transition-all duration-1000 ease-in-out ${burgerClicked ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className='flex flex-col font-monster text-2xl md:text-4xl'>
        {navLinks.map((link)=>
        <li>
        <button
          className='py-5  border-t-2 w-full border-gray text-center font-bold min-h-10'>
          {link.name}
        </button>
        </li>
        )}
        </ul>
      </div>
    </>
  );
}
