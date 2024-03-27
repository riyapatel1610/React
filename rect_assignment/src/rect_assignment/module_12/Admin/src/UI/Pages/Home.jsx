import React from 'react'
import './Home.css'
import image from "../../Images/banner1.png";

export default function Home() {
    return (
        <>
            <div className="homepage">
                <div className="container">
                    <div className="homepage-p">
                        <div className="homepage_banner">
                            <div className="left-banner">
                                <h1 className="title-top">Fresh Healthy</h1>
                                <h1 className="titile-b">delicious salad</h1>
                                <p>Healthy foods to eat everyday, Tasty and healthy vegetables salad with fresh tomatoes, coriander leaves and more.</p>
                                <button className="orderbtn">order now</button>
                            </div>
                            <div className="right-banner">
                            <img  src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
