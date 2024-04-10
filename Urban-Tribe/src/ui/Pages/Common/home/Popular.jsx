import React from "react";
import { Button } from "flowbite-react";
import popular1 from "../../../../assets/Images/popular1.avif";
import popular2 from "../../../../assets/Images/popular2.avif";
import popular3 from "../../../../assets/Images/popular3.avif";
import popular4 from "../../../../assets/Images/popular4.avif";
import popular5 from "../../../../assets/Images/popular5.avif";
import popular6 from "../../../../assets/Images/popular6.avif";
import popular7 from "../../../../assets/Images/popular7.avif";
import popular8 from "../../../../assets/Images/popular8.avif";

let sub = [
  {
    image: popular1,
    title: "Casual",
    shop: "Shop Now",
  },
  {
    image: popular2,
    title: "College",
    shop: "Shop Now",
  },
  {
    image: popular3,
    title: "School",
    shop: "Shop Now",
  },
  {
    image: popular4,
    title: "Professional",
    shop: "Shop Now",
  },
  {
    image: popular5,
    title: "Travel",
    shop: "Shop Now",
  },
  {
    image: popular6,
    title: "Sports",
    shop: "Shop Now",
  },
  {
    image: popular7,
    title: "Mask and Accessories",
    shop: "Shop Now",
  },
  {
    image: popular8,
    title: "Messenger",
    shop: "Shop Now",
  },
];
export default function Popular() {
  return (
    <>
    <h3 className="mx-36 mt-10">POPULAR</h3>
    <div className="grid grid-cols-4 mx-28 ">
    {sub?.map((e, i) => {
        return (
            <div key={i}>
                <div className=' p-3 relative'>
                    <div className="overflow-hidden rounded-[300px]">
                    <img className='hover:scale-110 transition-all duration-700 rounded-[300px] h-72 m-auto' src={e?.image} alt={e?.title} />
                    </div>
                </div>
                <div className="text-center">{e?.title}</div>
                    <Button className="m-auto my-3 text-white	bg-red-600  hover:!bg-black ">{e?.shop}</Button>
            </div>
        );
    })}
</div>
</>
  );
}
