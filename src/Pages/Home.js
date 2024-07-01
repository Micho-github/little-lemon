import React, { useState } from 'react'
import Dishcard from '../Components/Cards/Dishcard';

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
            <div className='flex items-center pb-5 justify-center align-center text-white mt-10 md:mt-0'>
                <p className='font-serif text-lg md:text-3xl lg:text-5xl'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img
                    className='shadow-md shadow-black rounded-lg w-36 md:w-64 lg:w-96 lg:mr-24'
                    src={require('../Assets/images/home-article-image.jpg')}
                    loading='lazy'
                    alt='Logo'
                />
            </div>
            <div>
                <button className='mb-3 font-bold text-black bg-[#F4CE14] px-3 py-2 rounded-xl text-lg font-monste  hover:shadow-lg hover:translate-y-0 md:text-3xl lg:mb-0'>
                    Reserve a Table
                </button>
            </div>
        </article>
        <form className='px-3 lg:px-10'>
            <h1 className='text-2xl font-serif font-bold pt-2 md:text-4xl'>Order for delivery!</h1>
                <div className="flex flex-row space-x-5 overflow-x-auto py-3 md:my-3">
                {categories.map((category)=>
                    <button
                    onClick={(e) => handleClick(e,category)}
                    key={category}
                    className={` rounded-full text-[1.25rem] font-serif px-3 py-1 md:text-3xl lg:text-4xl ${
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
