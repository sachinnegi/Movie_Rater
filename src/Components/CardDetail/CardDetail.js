import React, {useEffect} from 'react';
import Loader from '../Loader/Loader';
import './CardDetail.css';


const img_base_url = "https://image.tmdb.org/t/p/w342";
const backdrop_base_url = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";

function CardDetail({movieDetail}) {
    // console.log(movieDetail)

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    if (movieDetail){
        
        const container_style = {
            backgroundImage: `linear-gradient(to right, rgba(21.57%, 14.51%, 15.69%, 1.00) 150px, rgba(27.45%, 22.75%, 23.53%, 0.84) 100%), url("${backdrop_base_url + movieDetail.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            bakcgroundRepeat: 'no-repeat',    
        }
        
        return (
            <div style = {container_style} className = "CardDetail__container">
                <div className="CardDetail__image">
                    <img alt="poster" className="cardDetail__image" src={`${img_base_url + movieDetail.poster_path}`} />
                </div>
                <div className="CardDetail__detail">
                    <header className="cardDetail__header">
                        <h1 className="CardDetail__title">{movieDetail.title || movieDetail.name}</h1>
                        <p className="date">{movieDetail.first_air_date || movieDetail.release_date}</p>
                        <p className="popularity">Popularity {movieDetail.popularity}</p>
                    </header>
                    <section className="overview">
                        <p className="overview__header">Overview</p>
                        <div className="overview__detail">{movieDetail.overview}</div>
                    </section>
                    
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

export default CardDetail
