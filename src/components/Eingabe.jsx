import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Zutatenliste from "./Zutatenliste"
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import "../App.css"




export default function Zutateneingabe(props) {

    const [values, setValues] = useState({
        ingredients : ""
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
      };

    function handleAddElement(){
        if (values.ingredients === "") return
        props.updateIngredients(values.ingredients)
        setValues({
            ingredients : ""
        })
    }

    return (
    <React.Fragment>
        <div> <h1> <p class="oblique">The.Cocktail.App</p></h1></div>
        <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Grid >
                <TextField value={values.ingredients} onChange={handleChange("ingredients")} label="add some Ingredients ..." variant="outlined" />
            </Grid>
            <Grid class="add">
                <Button color="primary" onClick={handleAddElement} variant="contained">Add</Button>
            </Grid>
            <Grid >
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color="primary" checked={props.shopping} onChange={props.handleChangeShopping}/>}
                        label="click me to include shopping"
                        labelPlacement="start"
                    />
            </FormGroup>
            </Grid>
            
        </Grid>
        <Zutatenliste ingredients={props.ingredients} deleteIngredients = {props.deleteIngredients}/>
    </React.Fragment>
    )
}
