import React from 'react'
import i1_img from "../../../../assets/Images/bag1.webp"
import i2_img from "../../../../assets/Images/bag2.webp"
import i3_img from "../../../../assets/Images/bag3.webp"
import i4_img from "../../../../assets/Images/bag4.webp"
import i5_img from "../../../../assets/Images/bag5.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [{
  "id": 1,
  "title": "Armor Dust / Rain Cover for Backpack",
  "category": "Bag",
  "price": 499.00,
  "image": i1_img,
  "old_price": 600,
  "rating": 4,
  "discount": "30%"

},
{
  "id": 2,
  "title": "Amigo Backpack",
  "category": "Bag",
  "price": 1899.00,
  "image": i2_img,
  "old_price": 3233.00,
  "rating": 5,
  "discount": "14%"
},
{
  "id": 4,
  "title": "Fitpack Neo",
  "category": "Bag",
  "price": 1899.00,
  "image": i3_img,
  "old_price": 2899.00,
  "rating": 4,
  "discount": "10%"
},
{
  "id": 4,
  "title": "Caprio",
  "category": "Bag",
  "price": 999.00,
  "image": i4_img,
  "old_price": 1850.00,
  "rating": 4,
  "discount": "35%"
},
{
  "id": 5,
  "title": "Accelerator",
  "category": "Bag",
  "price": 1599.00,
  "image": i5_img,
  "old_price": 2399.00,
  "rating": 5,
  "discount": "20%"
}
]
export default function OurCollection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=' flex flex-col justify-center items-center px-4 lg:px-20 lg:py-20 gap-6'>
      <div className='w-full h-fit'>
        <Slider {...settings}>
          {
            data.map((item, index) => (
              <div id='slider-boxes' key={index} className='bg-white  flex flex-col justify-center items-center '>
                {/* image box css */}
                <div id='image-box' className='overflow-hidden relative group'>
                  {

                    <img src={item.image} alt={item.title} className='w-full h-fit object-cover' />

                  }
                  {/* <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-[5.5rem] group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>

            </div> */}
                  <div className='flex gap-1 mt-1 absolute -bottom-[-395px]  left-6...'>
                    <h7 className='bg-red-600 px-1.5 py-0.5 rounded-md text-xs text-white'>sale{item.discount}</h7>
                  </div>
                </div>
                <div className='text-black m-0'>
                  <h7>{item.rating}</h7>
                </div>
                <div className='overflow-hidden m-0'>
                  <h6 className='text-black'>{item.title}</h6>
                </div>
                <div class="flex items-center m-0">
                <div className=''>
                  <h6 className='text-black '>Rs.{item.price}</h6>
                </div>
                <div className=''>
                  <h6 className='text-black text-sm line-through opacity-50'>{item.old_price}</h6>
                </div>

                </div>
              </div>

            ))

          }
        </Slider>


      </div>


    </div>
  )
}
