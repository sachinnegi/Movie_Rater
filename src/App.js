import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Community from './Components/Community/Community';
import Tvshows from './Components/TvShow/TvShow';
import CardDetail from './Components/CardDetail/CardDetail';
import { BackTop } from 'antd';
import {VerticalAlignTopOutlined} from '@ant-design/icons';

/* 
  header
  card
  cardDetail
  Community
  About
  Movies/Homepage
  Tvshows
  Search Feature
  Register User
*/

function App() {

  const [movie,setMovie] = useState();
  const getMovie = (movieDetail)=>{
    setMovie(movieDetail);
  }  
  const style = {
    height: '40px',
    width: '40px',
    lineHeight: '40px',
    borderRadius: '50%',
    backgroundColor: '#6fb3b0',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  };
  
  return (
    <div className="App">

    <BackTop>
      <div style={style}><VerticalAlignTopOutlined/></div>
    </BackTop>
     
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
