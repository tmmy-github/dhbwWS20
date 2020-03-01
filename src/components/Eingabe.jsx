import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Liste from "./Liste"
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import "../App.css"

//creating Zutateneingabe with props with const for setting Values for ingredients

export default function Zutateneingabe(props) {

    const [values, setValues] = useState({
        ingredients : ""
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
      };

//if the input of ingredients equals nothing, the value updates ""

    function handleAddElement(){
        if (values.ingredients === "") return
        props.updateIngredients(values.ingredients)
        setValues({
            ingredients : ""
        })
    }

    return (
    <React.Fragment>
        <div> 
            <h1> 
                {/* This is the Top-Title for the application */}
                <p class="oblique">The.Cocktail.App</p> 
            </h1>
        </div>
        <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Grid >
                {/* implementing the text input field for ingredients */}
                <TextField value={values.ingredients} onChange={handleChange("ingredients")} label="add some Ingredients ..." variant="outlined" />
            </Grid>
            <Grid class="add">
                {/* Add Button */}
                <Button color="primary" onClick={handleAddElement} variant="contained">Add</Button>
            </Grid>
            <Grid >
                <FormGroup>
                    {/*Checkbox for shopping*/}
                    <FormControlLabel
                        control={<Checkbox color="primary" checked={props.shopping} onChange={props.handleChangeShopping}/>}
                        label="click me to include shopping"
                        labelPlacement="start"
                    />
            </FormGroup>
            </Grid>
            
        </Grid>
        <Liste 
            ingredients={props.ingredients} deleteIngredients = {props.deleteIngredients}
        />
    </React.Fragment>
    )
}
