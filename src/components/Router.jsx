import React, { Component } from 'react'
import { BrowserRouter,
    Switch,
    Route  } from "react-router-dom";
import Eingabefeld from './Eingabe';
import Übersicht from './Übersicht_Rezepte';
import RezeptAnsicht from './Rezepte';
import App_Bar_Navigation from "./Navbar"

const LOCAL_STORAGE_KEY ="cocktailapp.ingredients"
const LOCAL_STORAGE_SHOPPING = "cocktailapp.shopping"

export default class Router extends Component {

    constructor (props){
        super(props);
        this.state = {
            ingredients : [],
            shopping: false
        }
    } 

    componentDidMount(){
        const storedIngredients = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        const storedShopping = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHOPPING))
        if (storedIngredients) this.state.ingredients = storedIngredients
        if (storedShopping) this.state.shopping = storedShopping
        this.forceUpdate()
    }

    updateIngredients (input){
        this.state.ingredients.push(input)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.ingredients))
        this.forceUpdate()
    }

    deleteIngredients (input){
        this.state.ingredients.splice( this.state.ingredients.indexOf(input), 1 )
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.ingredients))
        this.forceUpdate()
    }

    handleChangeShopping(){
        this.state.shopping = !this.state.shopping
        localStorage.setItem(LOCAL_STORAGE_SHOPPING, JSON.stringify(this.state.shopping))
        this.forceUpdate()
    }


    render() {
        return (
            <div class="background">
            <BrowserRouter >
                
                    <Switch>
                        <Route path="/Übersicht_Rezepte" render={(props) => <Übersicht {...props}  shopping={this.state.shopping} ingredients={this.state.ingredients} />}/>
                        <Route path="/Rezept/:id" component={RezeptAnsicht}/>
                        <Route path="/" render={(props) => <Eingabefeld {...props} shopping={this.state.shopping} deleteIngredients={this.deleteIngredients.bind(this)} 
                            ingredients={this.state.ingredients} updateIngredients={this.updateIngredients.bind(this)} handleChangeShopping={this.handleChangeShopping.bind(this)}/>}/>
                    </Switch>
                    <App_Bar_Navigation/>
            </BrowserRouter>
            </div>
        )
    }
}
