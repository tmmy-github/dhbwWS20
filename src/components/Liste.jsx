import React from 'react'
import Zutat from "./Zutat"

{/*creating function list to show all ingredients that were added to the list*/}

export default function Liste(props) {
    return (
        <div>
            {props.ingredients.map(ingredient =>{
                return(
                    <Zutat deleteIngredient = {props.deleteIngredients} ingredient={ingredient}/>
                )
            })}
        </div>
    )
}
