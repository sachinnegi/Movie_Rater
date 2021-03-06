import React, {useState} from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Community from './Components/Community/Community';
import Tvshows from './Components/TvShow/TvShow';
import CardDetail from './Components/CardDetail/CardDetail';
import { BackTop } from 'antd';
import {VerticalAlignTopOutlined} from '@ant-design/icons';
import SearchResult from './Components/SearchResult/SearchResult';

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
  const [query, setQuery] = useState('')


  const getMovie = (movieDetail)=>{
    setMovie(movieDetail);
  }
  
  const onSearchChange = (value)=>{
    setQuery("")
    setTimeout(()=>{setQuery(value)},200) 
    // console.log(query)
    
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
     
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar onSearchChange = {onSearchChange} />

        {query.length>0 &&
          <Redirect push = {true} to={{
            pathname: '/search'
          }}/>
        }

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

          <Route exact path="/search" >
            <SearchResult searchInput = {query} getMovie = {getMovie} />
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
