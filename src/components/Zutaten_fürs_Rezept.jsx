import React, { Fragment, useState, useEffect } from 'react'
import Switch from "./Switch"



export default function Zutaten_fürs_Rezept(props) {

    function createTable() {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < props.recipe.amount.length; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 2; j++) {
            if (j === 0){
                children.push(<td>{props.recipe.amount[i]}</td>)
            }
            if (j === 1){
                children.push(<td>{props.recipe.ingredients[i]}</td>)
            }

          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }



    if(props.recipe){
        return(
        <table >
        {createTable()}
      </table>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    
}
