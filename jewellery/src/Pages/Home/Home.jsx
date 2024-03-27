import React from 'react'
import Crousal from './Crousal'
import Popular from '../../Components/popular/popular'
import Offers from '../../Components/Offers/Offers'
import NewCollection from '../../Components/NewCollection/NewCollection'
import NewLetter from '../../Components/NewsLetter/NewLetter'
import Footer from '../../Components/Footer/Footer'
// import Review from'../../Components/Review/Review'



export default function Home() {
  return (
    <div> 
      <Crousal/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
      {/* <Review/> */}
      
      
    </div>
  )
}
