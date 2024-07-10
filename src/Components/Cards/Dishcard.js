import React from 'react'

export default function Dishcard(prop) {
  return (
    <div key={prop.data.dish} className=' odd:bg-gray-200  border-b-2 border-red-500 flex flex-col  gap-2 w-full even:bg-gray-100 p-2 md:p-4 lg:p-10'>
        <h2 className='text-lg md:text-3xl text-black font-bold font-serif'>{prop.data.dish}</h2>
        <article className='flex flex-row md:text-2xl font-serif items-center gap-5 justify-between align-center text-gray-800'>
        {prop.data.description}
        <img
            src={prop.data.image}
            className='shadow-lg shadow-[#495E57] w-24 h-24 rounded-lg md:w-48 md:h-48 lg:mr-20 '
            loading='lazy'
            alt={`${prop.data.dish}`}/>
        </article>
        <div className='font-monster md:text-2xl'>
        $ {prop.data.price}
        </div>
    </div>
  )
}
