import React from 'react'
import i1_img from "../../../../assets/Images/bag1.webp"
import i2_img from "../../../../assets/Images/bag2.webp"
import i3_img from "../../../../assets/Images/bag3.webp"
import i4_img from "../../../../assets/Images/bag4.webp"
import i5_img from "../../../../assets/Images/bag5.webp"
import i6_img from "../../../../assets/Images/bag6.webp"
import i7_img from "../../../../assets/Images/bag7.webp"
import i8_img from "../../../../assets/Images/bag8.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
const data = [
  {
    id: 1,
    title: "Fitpack ",
    category: "Bag",
    price: 499.0,
    image: i1_img,
    old_price: 600,
    rating: 4,
    discount: "30%",
  },
  {
    id: 2,
    title: "Amigo Backpack",
    category: "Bag",
    price: 1899.0,
    image: i2_img,
    old_price: 3233.0,
    rating: 3,
    discount: "14%",
  },
  {
    id: 3,
    title: "Fitpack Neo",
    category: "Bag",
    price: 1899.0,
    image: i3_img,
    old_price: 2899.0,
    rating: 3,
    discount: "10%",
  },
  {
    id: 4,
    title: "Caprio",
    category: "Bag",
    price: 999.0,
    image: i4_img,
    old_price: 1850.0,
    rating: 4,
    discount: "35%",
  },
  {
    id: 5,
    title: "Neo Armor Dust / Rain Cover for Backpack",
    category: "Bag",
    price: 1599.0,
    image: i5_img,
    old_price: 2399.0,
    rating: 4,
    discount: "20%",
  },
  {
    id: 6,
    title: "Accelerator",
    category: "Bag",
    price: 1599.0,
    image: i6_img,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
  {
    id: 7,
    title: "Amigo Backpack",
    category: "Bag",
    price: 1599.0,
    image: i7_img,
    old_price: 2399.0,
    rating: 2,
    discount: "20%",
  },
  {
    id: 8,
    title: "Accelerator",
    category: "Bag",
    price: 1599.0,
    image: i8_img,
    old_price: 2399.0,
    rating: 4,
    discount: "20%",
  },
];

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    ],
  };
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="container">
     
      <div className=" flex flex-col justify-center items-center px-4 lg:px-20 lg:py-20 gap-6">
        <div className="w-full h-fit">
        <div className='container mt-[-33px]'>
        <h3>Our collection</h3>
      </div>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                id="slider-boxes"
                key={index}
                className="group  flex flex-col justify-center items-center "
              >
                {/* image box css */}
                <div
                  id="image-box"
                  className="group-hover:h-80 overflow-hidden relative group "
                >
                  {
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-fit object-cover"
                    />
                  }
                  <p className="bg-red-500 absolute p-1 !rounded-md top-1 left-1 text-white m-[10px]">
                    Sale {item.discount}
                  </p>
                  <div className="hidden group-hover:block absolute top-0 m-0 right-0">
                    <div className="bg-white hover:!bg-red-500 hover:text-white  border h-12 w-12 text-center rounded-full grid place-content-center">
                      <FontAwesomeIcon icon={faEye} />
                    </div>

                    <div className="bg-white hover:!bg-red-500 hover:text-white  border h-12 w-12 text-center rounded-full grid place-content-center">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                    {renderRatingStars(item.rating)}
                </div>
                <div className="flex flex-col items-center">
                    {/* {renderRatingStars(item.rating)}
                  <h7>{item.rating}</h7> */}
                  <h6 className="text-black">{item.title}</h6>
                  <div class="flex items-center ">
                    <h6 className="text-black">Rs.{item.price}</h6>
                    <div className='flex items-center gap-1'>
                      <h6 className="text-black text-sm line-through opacity-50">
                        {item.old_price}
                      </h6>
                    </div>
                  </div>
                  <button className="bg-[#d11e33] text-white rounded-md py-2 px-5 hidden group-hover:block">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}