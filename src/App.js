import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Community from './Components/Community/Community';

/* 
  header
  card
  cardDetail
  Community
  About
  Movies/Homepage
  Tvshows
*/

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/community'> 
            <Community/>
          </Route>
          <Route exact path='/about'> 
            <About/>
          </Route>
        </Switch>

      </Router>
      

      
    </div>
    
  );
}

export default App;
