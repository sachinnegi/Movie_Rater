import React, {useState,useEffect} from 'react';
import './SearchResult.css'
import {key,img_base_url} from '../../api';
import axios from 'axios';
import Loader from '../Loader/Loader'

function SearchResult({searchInput}) {

    const [movieArray, setMovieArray] = useState([])

    async function getSearchResult(query){
        try{
            const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
            const response = await axios.get(searchUrl);
            setMovieArray(response.data.results)
            console.log(response.data.results);
        }
        catch(error){
            console.log('Got error:-',error)
        }
    }

    
    
    useEffect(() => {
        if (searchInput.length>0){
            getSearchResult(searchInput)
            window.scrollTo(0,0)
        }
        
    }, [searchInput])

    
    if (movieArray.length>0){
        return (
            <div className="search__card__container">
                {
                    movieArray.map( (item,idx) => ((
                        item.poster_path && <div key={item.id} className="search__image__detailContainer">
                            <img 
                                className = "search__image" 
                                alt='poster' 
                                src={img_base_url+item.poster_path} 
                            />
                            <div className="search__detail">
                                {item.name || item.title}
                            </div>
                        </div>
                    )))
                }
                
            </div>
        )
  }
  else{
      return(
          <Loader />
      )
  }
    
}

export default SearchResult
