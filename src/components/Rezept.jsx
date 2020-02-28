import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import "../App.css"


const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
  root: {
    background: styledBy('color', {
      green: '#088A08',
      yellow: '#FACC2E',
      default: "#F6CECE"
    }),
    color: 'black',
    height: 48,
  },
};

const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

export default function Rezept(props) {
  var color = "default"

  if (props.recipe.matchingRate === 1){
    color = "green"
}

    if (props.recipe.matchingRate >= 0.5){
        color = "yellow"
}

    
  if (!props.shopping){
    if (props.recipe.matchingRate ===1){
        return (
            <React.Fragment>
                <StyledButton color={color}  ><Link href={"/Rezept/"+props.recipe.name}>{props.recipe.name}</Link></StyledButton>
                  <Divider/>
            </React.Fragment>
          );
    }
    else{
        return(
            <div>
              
            </div>
        )
    }
  }
  else{
    return (
        <React.Fragment>
          <div class="oblique2">choose:</div>
            <StyledButton color={color}  ><Link href={"/Rezept/"+props.recipe.name}>{props.recipe.name}</Link></StyledButton>
            <Divider/>
        </React.Fragment>
      );
  }
  
}
