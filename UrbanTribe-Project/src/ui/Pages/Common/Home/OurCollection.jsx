import React from "react";

import bag1 from "../../../../assets/Images/bag1.webp";
import bag2 from "../../../../assets/Images/bag2.webp";
import bag3 from "../../../../assets/Images/bag3.webp";
import bag4 from "../../../../assets/Images/bag4.webp";
import bag5 from "../../../../assets/Images/bag5.webp";
import bag6 from "../../../../assets/Images/bag6.webp";
import bag7 from "../../../../assets/Images/bag7.webp";
import bag8 from "../../../../assets/Images/bag8.webp";


import bagg1 from "../../../../assets/Images/bagg1.webp";
import bagg2 from "../../../../assets/Images/bagg2.webp";
import bagg3 from "../../../../assets/Images/bagg3.webp";
import bagg4 from "../../../../assets/Images/bagg4.webp";
import bagg5 from "../../../../assets/Images/bagg5.webp";
import bagg6 from "../../../../assets/Images/bagg6.webp";
import bagg7 from "../../../../assets/Images/bagg7.webp";
import bagg8 from "../../../../assets/Images/bagg8.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CardCom from "../../../Component/Card/CardCom";
const data = [
  {
    id: 1,
    title: "Fitpack Neo",
    category: "Bag",
    price: 499.0,
    image: bag1,
    HoverImage: bagg1,
    old_price: 600,
    rating: 4,
    discount: "37%",
  },
  {
    id: 2,
    title: "Amigo Backpack",
    category: "Bag",
    price: 1899.0,
    image: bag2,
    HoverImage: bagg2,
    old_price: 3233.0,
    rating: 5,
    discount: "14%",
  },
  {
    id: 3,
    title: "Fitpack Neo",
    category: "Bag",
    price: 1899.0,
    image: bag3,
    HoverImage: bagg3,
    old_price: 2899.0,
    rating: 4,
    discount: "10%",
  },
  {
    id: 4,
    title: "Caprio",
    category: "Bag",
    price: 999.0,
    image: bag4,
    HoverImage: bagg4,
    old_price: 1850.0,
    rating: 4,
    discount: "35%",
  },
  {
    id: 5,
    title: "Neo Armor Dust / Rain Cover for Backpack",
    category: "Bag",
    price: 1599.0,
    image: bag5,
    HoverImage: bagg5,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
  {
    id: 6,
    title: "Accelerator",
    category: "Bag",
    price: 1599.0,
    image: bag6,
    HoverImage: bagg6,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
  {
    id: 7,
    title: "Amigo Backpack",
    category: "Bag",
    price: 1599.0,
    image: bag7,
    HoverImage: bagg7,
    old_price: 2399.0,
    rating: 5,
    discount: "20%",
  },
  {
    id: 8,
    title: "Accelerator",
    category: "Bag",
    price: 1599.0,
    image: bag8,
    HoverImage: bagg8,
    old_price: 2399.0,
    rating: 5,
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
      
        stars.push(<FontAwesomeIcon key={i} icon={faStar}className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="container">
      <div className=" flex flex-col justify-center items-center px-4 lg:px-20 lg:py-1 gap-6">
        <h4 className="container">OUR COLLECTIONS</h4>
        <div className="w-full h-fit">
          <Slider {...settings}>
            {data.map((item, index) => (
              <CardCom key={index} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
