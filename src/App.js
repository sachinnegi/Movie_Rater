import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Community from './Components/Community/Community';
import Tvshows from './Components/TvShow/TvShow';
import CardDetail from './Components/CardDetail/CardDetail';

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

  const [movie,setMovie] = useState();
  const getMovie = (movieDetail)=>{
    setMovie(movieDetail);
  }  

  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Switch>
          <Route exact path='/'>
            <Home getMovie = {getMovie}/>
          </Route>
          <Route exact path='/tvshows'>
            <Tvshows getMovie = {getMovie}/>
          </Route>
          <Route exact path="/carddetail" >
            <CardDetail movieDetail = {movie} />
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
