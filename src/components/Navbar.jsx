import React from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';



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
            <div className={classes.root} class="icon">
                   <LocalBarIcon color="#FFEB3B" style={{ fontSize: 75 }}/>
                 </div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid>
                    <IconButton color="primary" aria-label="delete" component={Link} to={'/'}>
                        <AddShoppingCartIcon />
                    </IconButton>
                </Grid>
                <Grid>
                <Button variant="outlined" color="primary" aria-label="delete" component={Link} to={'/Übersicht_Rezepte'}>
                    Recipe
                </Button>
                </Grid>
                <Grid>
                <div className={classes.root}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
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
