import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

{/*implementation for a navbar that is shown on every page*/}

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

export default function Navigation({props}) {
    const classes = useStyles();

    return (
        <div class="App_Bar">
                {/*The "Logo" for the App is shown on every page in yellow*/}
                <div className={classes.root} class="icon">
                    <LocalBarIcon color="#FFEB3B" style={{ fontSize: 70 }}/>
                    </div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid>
                    {/*if you click on this logo you go to the fist page*/}
                    <IconButton color="primary" aria-label="delete" component={Link} to={'/'}>
                        <AddShoppingCartIcon />
                    </IconButton>
                </Grid>
                <Grid>
                    {/*implementing the Button for recipe-page*/}
                <Button variant="outlined" color="primary" aria-label="delete" component={Link} to={'/Übersicht_Rezepte'}>
                    Recipe
                </Button>
                </Grid>
                <Grid>
                    {/*Grid container for input field if you want to share your results*/}
                <div className={classes.root}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    {/*share button from material ui*/}
                <label htmlFor="contained-button-file">
                     <Button variant="contained" color="primary" component="span">
                        Share results
                    </Button>
                 </label>
                 </div>
                </Grid>
            </Grid>            
        </div>
    )
}
