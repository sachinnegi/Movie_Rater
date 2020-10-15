import React from 'react';
import './SearchResult.css'
import {key} from '../../api';
import axios from 'axios';



async function getSearchResult(query){
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
    const response = await axios.get(searchUrl);
    console.table(response)
}

function SearchResult({searchInput}) {
    
    if (searchInput.length>0){
        getSearchResult(searchInput)
    }
    
    return (
        <div>
            <p>'hi this is search page'</p>
            <p>'hi this is search page'</p>
            <p>'hi this is search page'</p>
            <p>'hi this is search page'</p>
            
        </div>
    )
}

export default SearchResult
