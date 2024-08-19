import React from 'react'
import Navbar from "../../components/navbar/navbar"
import homeimg from "./home.png"

function home() {
    return (

        <div>
            <Navbar />
            
            <h1 className='tag-name'>Home</h1>
            <img className='img' src={homeimg}/>
        </div>
    )
}

export default home