import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import './CardArray.css'
import axios from 'axios';
import Loader from '../Loader/Loader';

function CardArray({reqbgImg,getUrl,heading,url,getMovie}) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0);
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                setMovies(response.data.results)
                if (reqbgImg){
                    getUrl(response.data.results[Math.floor(Math.random()*(response.data.results.length-1))])
                }
                // console.log(response.data.results)
                return response;
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[url])
    
    if (isLoading===true && movies.length>0){
        setisLoading(false)
    }

    if (isLoading=== false){
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
    else{
        return (
            <Loader />
        )
    }
}

export default CardArray
