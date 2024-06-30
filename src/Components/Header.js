import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
export default function Header() {

  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <>
      <header>
        <nav className='flex px-4 py-3 justify-between align-center bg-white min-h-24 text-center'>
          <img
            src={require('../Assets/images/logo.jpg')}
            loading='lazy'
            width={250}
            alt='Logo'
          />
          <button onClick={() => setBurgerClicked(!burgerClicked)}>
            {burgerClicked ? (
              <XMarkIcon width={50} color='black' />
            ) : (
              <Bars3Icon width={50} color='black' />
            )}
          </button>
        </nav>
      </header>
      <div className={`absolute w-full bg-white transition-all duration-1000 ease-in-out ${burgerClicked ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className='flex flex-col font-monster text-2xl'>
          <li>
            <button
              className='py-5  border-t-2 w-full border-gray text-center font-bold min-h-10'>
              Home
            </button>
          </li>
          <li>
            <button
              className='py-5 border-t-2 w-full border-gray text-center font-bold min-h-10'>
              About
            </button>
          </li>
          <li>
            <button
              className='py-5 border-t-2 border-b-2 w-full border-gray text-center font-bold min-h-10'>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
