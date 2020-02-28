import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

export default function Liste(props) {

    const handleChange = event => {
        props.deleteIngredient(props.ingredient)
    };

    return (
        <FormGroup>
          <FormControlLabel
              control={<Checkbox checked={false} onChange={handleChange}/>}
              label={props.ingredient}
          />
          </FormGroup>
    )
}
