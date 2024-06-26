import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export default function CardCom({ data }) {
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
    <div className=" hover:h-40 group datas-center m-3  ">
      <div className="relative mb-5">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-[100%] group-hover:!opacity-0   group-hover:!duration-700"
        />
        <img
          src={data.HoverImage}
          alt={data.title}
          className="absolute top-0 left-0 w-full h-[100%] group-hover:!opacity-100 transition-opacity !duration-700 opacity-0  "
        />
        <p className="bg-red-600 absolute p-0.5 text-xs  top-2 left-2 rounded-sm text-white">
          Sale {data.discount}
        </p>
        <div className=" opacity-0 group-hover:!opacity-100 duration-300 absolute top-0 m-2 right-0">
          <div className=" bg-white hover:!bg-red-500 mb-2 hover:text-white  border h-12 w-12 text-center rounded-full grid place-content-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="bg-white hover:!bg-red-500 hover:text-white  border h-12 w-12 text-center rounded-full grid place-content-center">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <div className="bg-white group-hover:-translate-y-12 transition-all duration-500 flex flex-col items-center gap-1">
        <div className='flex items-center space-x-2 '>
          {renderRatingStars(data.rating)}
        </div>
        <h6 className="text-black font-normal">{data.title}</h6>
        <div class="flex m-0 space-x-2">
          <h6 className="text-red-600 ">Rs.{data.price} </h6>
          <h6 className="text-black text-sm line-through ">
            Rs.{data.old_price}
          </h6>
        </div>
        <button className="bg-[#d11e33] text-white rounded-md py-2 px-5  hidden group-hover:block hover:bg-white hover:border-2 hover:border-red-600 hover:text-red-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
