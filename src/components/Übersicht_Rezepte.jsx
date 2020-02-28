import React, { Component } from 'react'
import Rezept from './Rezept';
import Grid from '@material-ui/core/Grid';
import axios from "axios"

import "../App.css"

export default class Übersicht extends Component {

    constructor(props){
        super(props);
        this.state ={
            download : [],
            recipes : [],
            shopping : true
        }
    }

    
    componentDidMount(){
        this.getDatabaseUpdate()
        this.state.shopping = this.props.shopping
        console.log("Domponent did mount")
    }

    

    setRecipes(){
        this.state.download.map(recipe => {
            const ingredients = recipe.ingredients.split(",")
            const recipename = recipe.name
            var newelement = {}
            newelement["ingredients"] = ingredients
            newelement["name"] = recipename
            this.state.recipes.push(newelement)
        })
        this.checkMatchingRateIngRec()
    }

    getDatabaseUpdate(){
        axios.get("https://dhbwws20.firebaseio.com/recipes.json").then(
        response =>   {
            const fetchedOrders = [];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })
            this.state.download = fetchedOrders
            }
            this.setRecipes()
    })}
    
    compareValues(key, order = 'desc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
            }
        
            const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
        
            let comparison = 0;
            if (varA > varB) {
            comparison = 1;
            } else if (varA < varB) {
            comparison = -1;
            }
            return (
            (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    checkMatchingRateIngRec(){
        this.state.recipes.forEach( recipe => {
            var ret = []
            var matchingRate = 0
            for(var i in recipe) {
                for(var ingredients in recipe[i]){
                    if(this.props.ingredients.indexOf(recipe[i][ingredients]) > -1){
                        ret.push(recipe[i][ingredients]);
                    }
                }
            if (i === "ingredients"){
            matchingRate = ret.length / recipe[i].length
            recipe.matchingRate = matchingRate
            }
            }
        })
        this.forceUpdate()
        this.state.recipes.sort(this.compareValues("matchingRate"))
        this.forceUpdate()
    }

    Top() {
    return (
        <React.Fragment>
            XX
        </React.Fragment>
        )
    }
    

    render() {
        return(
            
        this.state.recipes.map(item => {
            
            return ( 
                <React.Fragment>
                    
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    
                    <Grid>
                        
                        <Rezept key={item.name} shopping={this.state.shopping} recipe = {item}/>
                    </Grid>
                    
                </Grid>
                </React.Fragment>
                
            )   
        })
        )
    }
}