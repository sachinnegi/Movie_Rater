import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import axios from 'axios';

function CardArray({heading,url}) {
    // console.log(url)
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                setMovies(response.data.results)
                console.log(response.data.results)
                return response;
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[url])
    
    return (
        <div className = "row">

            <h1>heading</h1>
            <div className = "cards-container">
                {movies.map( (movie,idx)=>(
                    <Card
                        key = {movie.id}
                        title = {movie.title}
                        id = {movie.id}
                        poster_path = {movie.poster_path}
                    />
                ))} 
            </div>
        </div>
       
    )
}

export default CardArray
