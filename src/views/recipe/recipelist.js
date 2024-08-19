import React from 'react'
import Navbar from "../../components/navbar/navbar"
import recipeimg from "./recipelist.png"

function recipelist() {
    return (
        <div>
            <Navbar />
           <h1 className='tag-name'>RecipeList</h1> 

            <img className='img' src={recipeimg}/>
        </div>
    )
}

export default recipelist