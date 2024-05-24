// import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Card';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Freebook = () => {
    // const filterData = list.filter((data)=>data.catagory==="free")
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/book').then((response)=>{
      const filterData = response.data.book.filter((item) => item.price === 0)
      setData(filterData)
    })
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
    }
    return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione asperiores rerum tempora atque reprehenderit perferendis illum excepturi necessitatibus voluptas odio, saepe explicabo nam et alias fuga. Consequuntur, aperiam sunt!</p>
    </div>
    <div>
        <Slider className='dark:bg-slate-900 dark:text-white' {...settings}>
            {data.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
        </Slider>
    </div>
    </>
  )
}

export default Freebook