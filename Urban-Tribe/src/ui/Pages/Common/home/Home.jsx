import React from 'react'
import bgImage from "../../../../assets/Images/bg.webp";
import fiptpack from "../../../../assets/Images/Fitpack.webp"
import rumble from "../../../../assets/Images/Rumble.webp";
import OurCollection from "./OurCollection"
import Popular from "./Popular"
import Fotter from '../../../Component/Footer/Footer';
import { GiRecycle } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { LuClock3 } from "react-icons/lu";

export default function Home() {
    return (<>
        <div className='relative flex justify-center'>
            <img src={bgImage} alt="" />
            <button className=' mb-3 px-[40px] absolute bottom-0 py-[10px] bg-red-700 rounded-3xl text-white hover:!text-red-700 hover:bg-white'>Shop Now</button>
        </div>
        {/* ------fippack section-------- */}
        <div className='flex  justify-center container gap-4 py-5'>
                <div className='overflow-hidden'> 
                <img src={fiptpack} alt="" className='hover:scale-110 transition-all duration-700' />
                </div>
                <div className='overflow-hidden'>
                <img src={rumble} alt="" className='hover:scale-110 transition-all duration-700' />
                </div>
            </div>
            {/* --------------our collection-------- */}
            <OurCollection />
            {/* ----------------popular section------------ */}
            <Popular />

            {/* ----------------Cash on delivery---------------  */}
           <div className='bg-[#d11e33] text-white p-[80px]'>
        
        <div className='flex justify-around text-center [&>*]:cursor-pointer '>
            <div className='group/item justify-center text-xl'><span className='group-hover/item:text-black text-6xl'> <GiRecycle /></span> <br />
                Hassle free Return</div>
            <div className='group/item justify-center text-xl '><span className='group-hover/item:text-black  text-6xl' ><TbTruckDelivery /></span><br />
               cash on delivery</div>
            <div className='group/item justify-center text-xl'><span className='group-hover/item:text-black text-6xl'><LuClock3 /></span><br/>
                12 months warranty</div>
        </div>

    </div >
    <OurCollection />



            {/* ----------------HOMEGROWN INDIAN BRAND---------------  */}
        <div className='bg-[#d11e33] text-white p-[100px]'>
            <div className='flex justify-center mb-[50px]'><h2>HOMEGROWN INDIAN BRAND</h2></div>
            <div className='flex justify-around text-center [&>*]:cursor-pointer '>
                <div className='group/item'><span className='group-hover/item:text-black'> 1M+</span> <br />
                    Happy Customer</div>
                <div className='group/item'><span className='group-hover/item:text-black'>500k+</span><br />
                    Website Visitors every month</div>
                <div className='group/item'><span className='group-hover/item:text-black'>100+</span><br />
                    Hyperfunctional designsS</div>
            </div>

        </div >

 <Fotter />
           
    </>
    )
}
