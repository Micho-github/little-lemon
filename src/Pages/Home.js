import React, { useState } from 'react'
import Dishcard from '../Components/Cards/Dishcard';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function Home() {
 const categories = ["Lunch","Mains","Desserts","A La Carte","Specials"];
 const datas = [
    {dish:"Greek Salad",
     description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
     image:require('../Assets/images/greek-salad.jpg'),
     price:"12.99",
    },
    {dish:"Brushetta",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.",
    image:require('../Assets/images/brushetta.jpg'),
    price:"7.99",
    },
    {dish:"Grilled Fish",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: require('../Assets/images/home-article-image.jpg'),
    price:"20.00",
    }
];

const [ClickedCategory,SetclickedCategory] = useState("");

const handleClick = (e,category) => {
    e.preventDefault();
    if(category === ClickedCategory){
        SetclickedCategory("");
    }
    else
    SetclickedCategory(category);
  };

    return (
    <main className=' min-h-[30rem] '>
        <article className='flex flex-col bg-[#495E57] px-3 py-2 md:px-6 md:pt-6 lg:p-10'>
            <h1 className='text-[#F4CE14] text-4xl md:text-6xl lg:text-7xl'>Little Lemon</h1>
            <h2 className='text-white text-3xl md:text-5xl lg:text-6xl md:mt-2'>SYDNEY</h2>
            <div className='flex items-center pb-5 justify-between align-center text-white mt-10 md:mt-0'>
                <div className='flex flex-col justify-between'>
                    <p className='font-serif text-lg md:text-3xl lg:text-4xl'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                    {/* <button className='mt-5 w-48 md:w-64 lg:w-96 font-bold text-black bg-[#F4CE14] px-1 py-2 rounded-xl text-lg font-monste  hover:shadow-lg hover:translate-y-0 md:text-3xl lg:mt-10'>
                        Reserve a Table
                    </button> */}
                  <Link role='button' id='link' to={'/BookingForm'} className=" relative mt-5 w-48 md:w-96 px-1 py-2 border border-[#f5d65780] cursor-pointer leading-none overflow-hidden text-center uppercase transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]  hover:border-[#f5d657] hover:shadow-[0_0_5px_5px_rgba(245,214,87,0.8)] hover:text-[#191919] rounded-xl text-lg font-monster hover:shadow-lg hover:translate-y-0 md:text-3xl lg:mt-10 bg-[#F4CE14] transition-colors duration-2000 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-[#e5bc10]">
                    <div className="relative flex flex-row justify-center items-center gap-2 text-[#191919] transition-colors duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-[#191919]">
                      Reserve a table
                      <div className="shift inline-block transition-all duration-1100 ease-[cubic-bezier(0.19,1,0.22,1)] align-top">
                        <MdKeyboardDoubleArrowRight size={40} />
                      </div>
                    </div>
                    <div className="mask absolute top-0 left-0 w-[12.5rem] h-[6.25rem] bg-[#f5d65780] transform translate-x-[-120%] translate-y-[-3.125rem] rotate-[45deg] transition-all duration-1100 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
                </Link>
                </div>
                <img
                    className='bg-orange-900 shadow-md shadow-black rounded-lg w-36 h-36 md:w-64 md:h-64 lg:w-96lg:h-96 lg:mr-24'
                    src={require('../Assets/images/home-article-image.jpg')}
                    loading='lazy'
                    alt='Logo'
                />
            </div>
            <div>

            </div>
        </article>
        <form className='px-3 lg:px-10'>
            <h1 className='text-2xl font-serif font-bold pt-2 md:text-4xl'>Order for delivery!</h1>
                <div className="flex flex-row space-x-5 overflow-x-auto py-3 md:my-3">
                {categories.map((category)=>
                    <button
                    onClick={(e) => handleClick(e,category)}
                    key={category}
                    className={` rounded-full font-serif px-3 py-1 text-2xl md:text-3xl lg:text-4xl ${
                      ClickedCategory === category ? 'bg-[#495E57] text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {category}
                  </button>
                )}
                </div>
                <div className='flex flex-col '>
                    {datas && datas.map((data)=>
                        <Dishcard data = {data}/>
                    )}
                </div>

        </form>
    </main>
  )
}
