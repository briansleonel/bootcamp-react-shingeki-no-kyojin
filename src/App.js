import './App.css';
import React from 'react';

//import characters from "./data/data.json";
//import appData from "./data/app-data.json";

import Navbar from './components/layout/navbar';
import About from './components/layout/about';

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

        <About />
      </>
    )
  }
}

export default App;
