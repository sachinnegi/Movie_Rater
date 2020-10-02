import React, {useState, useEffect} from 'react';
import {img_base_url} from '../../api';
import axios from 'axios';

function Card({title,url}) {
    // console.log(url)
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                setMovies(response.data.results)
                return response;
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[url])
    
    return (
        <div className = "Card_container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            {movies.map( (movie,idx)=>(
                <h3 key={idx}>{movie.title}</h3>
            ))} 
        </div>
       
    )
}

export default Card
