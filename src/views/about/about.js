import React from 'react'
import Navbar from "../../components/navbar/navbar"
import aboutimg from "./about.png"

function about() {
    return (
        <div>
            <Navbar />
            <h1 className='tag-name'>About Us</h1>
            <img className='img' src={aboutimg}/>
        </div>
    )
}

export default about