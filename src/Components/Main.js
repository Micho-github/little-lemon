import React from 'react';
import Home from '../Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Main() {
  return (
    <div className=' min-h-96 mt-24 md:mt-[120px] lg:mt-24'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}
