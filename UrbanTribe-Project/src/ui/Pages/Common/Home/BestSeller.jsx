import React from "react";
import i1_img from "../../../../assets/Images/best1.webp"
import i2_img from "../../../../assets/Images/best2.webp"
import i3_img from "../../../../assets/Images/best3.webp"
import i4_img from "../../../../assets/Images/best4.webp"
import i5_img from "../../../../assets/Images/best5.webp"
import i6_img from "../../../../assets/Images/best6.webp"


import bagg1 from "../../../../assets/Images/bestt1.webp";
import bagg2 from "../../../../assets/Images/bestt2.webp";
import bagg3 from "../../../../assets/Images/bestt3.webp";
import bagg4 from "../../../../assets/Images/bestt4.webp";
import bagg5 from "../../../../assets/Images/bestt5.webp";
import bagg6 from "../../../../assets/Images/bestt6.webp";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import CardCom from "../../../Component/Card/CardCom";
const data = [
  {
    id: 1,
    title: "Fitpack ",
    category: "Bag",
    price: 499.0,
    image: i1_img,
    HoverImage: bagg1,
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
    HoverImage: bagg2,
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
    HoverImage: bagg3,
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
    image: i5_img,
   HoverImage: bagg5,
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
    HoverImage: bagg6,
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
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    beforeChange: (current, next) => {
      setOldSlide(2);
      setActiveSlide(3);
    },
    afterChange: (current) => setActiveSlide2(current),
  };

  return (
    <div className="mx-[60px]">
      <div className=" flex flex-col justify-center items-center px-4 lg:px-20 lg:py-10 gap-6">
        <h4 className="container">BEST SELLER</h4>
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
