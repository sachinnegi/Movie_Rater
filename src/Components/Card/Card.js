import React, {useState, useEffect} from 'react';
import {img_base_url} from '../../api';
import axios from 'axios';

function Card({url}) {
    console.log(url)
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        const getData = async(url) =>{
            try{
                const response  = await axios.get(url);
                console.table(response.data.results);
            } catch(error) {
                console.log(error, "somethings not right");
            }
        }
        getData(url);
    },[url])

    return (
        <div>

        </div>
       
    )
}

export default Card
