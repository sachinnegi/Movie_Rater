import React, {useState, useEffect} from 'react'
import { Carousel } from 'antd';
import './Carousel.css';
import {key,img_base_url} from '../../api';
import axios from 'axios';

const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`;
var poster1,poster2,poster3, poster4;
function CarouselAnimation() {
   
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        window.scrollTo(0,0);
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                setMovies(response.data.results)
                console.log(movies)
                return response;
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[])
    if (movies.length>0){
        poster1 = `${img_base_url}${movies[Math.floor(Math.random()*8)].poster_path}`
        poster2 = `${img_base_url}${movies[8+Math.floor(Math.random()*3)].poster_path}`
        poster3= `${img_base_url}${movies[12+Math.floor(Math.random()*3)].poster_path}`
        poster4 = `${img_base_url}${movies[16+Math.floor(Math.random()*3)].poster_path}`
    }
    // console.log(poster);
    
    
    return (
        <div >
            
            <Carousel pauseOnHover ={false} autoplay speed= {1000} autoplaySpeed = {2400} className= 'car'>
                <div className = "indiv">
                    <img className='image' src= {poster1}/>
                </div>
                <div className = "indiv">
                    <img className='image' src= {poster2}/>
                </div>
                <div className = "indiv">
                    <img className='image' src= {poster3}/>
                </div>
                <div className = "indiv">
                    <img className='image' src= {poster4}/>
                </div>
            </Carousel>
               
        </div>
        
    )
}

export default CarouselAnimation
