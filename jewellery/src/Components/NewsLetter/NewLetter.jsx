import React from 'react'
import './NewLetter.css'

export default function NewLetter() {
    return (
        <div className="newsletter">
            <h1>Subscribe for Ashirwaad Magazines</h1>
            <p>Get E-mail of all the updates about our lastest and special offers</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
