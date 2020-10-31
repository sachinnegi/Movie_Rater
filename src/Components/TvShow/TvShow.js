import React, {useState} from 'react';
import {tvShowURL} from '../../api';
import CardArray from '../CardArray/CardArray';
import './TvShow.css';

const backdrop_base_url = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
// const backdrop_base_url = "http://image.tmdb.org/t/p/w780/";

function TvShow({getMovie}) {
    const[imgurl, setImgurl] = useState('')
    const getUrl = (url) =>{
        setImgurl(url)
    }
    // console.log(imgurl)
    var container_style = {}
    if (imgurl){
        container_style = {
            backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.5) , rgba(0,0,0, 0.84)), url("${backdrop_base_url + imgurl.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            bakcgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: "75vh",
            marginRight: '0px',    
        }
    }
    return (
        
        <div className="homepage tv__show">
            <div style = {container_style} className="tvShow__backgroundcover"></div>
            <CardArray reqbgImg={true} getUrl = {getUrl} heading = {"Trending"} url={tvShowURL.trending} getMovie = {getMovie} />
            <CardArray heading = {"Latest"} url={tvShowURL.latest} getMovie = {getMovie} />
            <CardArray heading = {"Popular"} url={tvShowURL.popular} getMovie = {getMovie} />
            <CardArray heading = {"Top Rated"} url={tvShowURL.topRated} getMovie = {getMovie} />         
        </div>    
    )
}

export default TvShow
