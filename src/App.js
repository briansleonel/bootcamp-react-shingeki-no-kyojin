import './App.css';
import React, { useEffect, useState } from 'react';

import charactersData from "./data/data.json";

import Navbar from './components/layout/navbar';
import About from './components/layout/about';
import Home from './components/layout/home';
import CharacterDetail from './components/character-details/character-datail.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  // Seteo los characters en un objeto vacío cuando se monta el componente
  const [charactersInfo, setCharactersInfo] = useState({});

  // Cuando se monta el componente, establezco en el estado de los characters, la lista de characters de data.json
  useEffect(() => {
    setCharactersInfo(() => {
      return charactersData.characters
    });
  }, [])


  return(
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home charactersData={charactersInfo} />
        </Route>

        <Route path="/charDetail" exact>
          <CharacterDetail charactersData={charactersInfo} />
        </Route>

        <Route path="/charDetail/:idCharacter" >
          <CharacterDetail charactersData={charactersInfo} />
        </Route>
        
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>  
  )
}

//<CharacterDetail charactersData={charactersInfo} />

export default App;
