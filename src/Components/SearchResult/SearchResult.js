import React from 'react';
import './SearchResult.css'
import {key} from '../../api';

var query = '';
const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

function SearchResult() {
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
