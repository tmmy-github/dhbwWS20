import React from 'react';
import logo from './cocktail.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        Ingredience:
        <div> __________ </div>
        <div>
        Include shopping? O &nbsp; 
        <Button variant="outlined" color="secondary">
        Add
        </Button>
        </div>
        <div>______________________________</div>
        <div>Item1 O</div>
        <div>Item2 O</div>
        <div>Item3 O</div>
        <div>______________________________</div>
        <div><Button variant="outlined" color="secondary">
        delete
        </Button>
        &nbsp;
        <Button variant="outlined" color="secondary">
        recieps
        </Button>
        </div>

      </header>
    </div>
  );
}

export default App;
