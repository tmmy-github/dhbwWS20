import React, { Fragment, useState, useEffect } from 'react'

export default function Zutaten_fürs_Rezept(props) {

  {/*Table for comparing input ingredients with ingredients for cocktails concerning amount of letters*/}


    function createTable() {
        let table = []
        for (let i = 0; i < props.recipe.amount.length; i++) {
          let children = []
          for (let j = 0; j < 2; j++) {
            if (j === 0){
                children.push(<td>{props.recipe.amount[i]}</td>)
            }
            if (j === 1){
                children.push(<td>{props.recipe.ingredients[i]}</td>)
            }
          }
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
