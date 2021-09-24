import './App.css';
import React from 'react';

import characters from "./data/data.json";
//import appData from "./data/app-data.json";

import Navbar from './components/layout/navbar';
import About from './components/layout/about';
import Home from './components/layout/home';
import CharacterDetail from './components/character-details/character-datail.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }

    
  }

  render() {
    return(
      <>
        <Navbar />

        <Home charactersData={characters.characters} />

        <CharacterDetail charactersData={characters.characters} />

        <About />
      </>
    )
  }
}

export default App;
