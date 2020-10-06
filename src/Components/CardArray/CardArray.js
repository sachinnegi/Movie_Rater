import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import './CardArray.css'
import axios from 'axios';

function CardArray({heading,url,getMovie}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                setMovies(response.data.results)
                // console.log(response.data.results)
                return response;
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[url])
    
    return (
        <div className = "row">

            <h1 className='heading'>{heading}</h1>
            <div className = "cards__container">
                {movies.map( (movie,idx)=>(
                    <Card
                        key = {movie.id}
                        title = {movie.title || movie.name}
                        id = {movie.id}
                        poster_path = {movie.poster_path}
                        movieDetail =  {movie}
                        getMovie = {getMovie}
                    />
                ))} 
            </div>
        </div>
       
    )
}

export default CardArray
