import React, {useState} from 'react'
import {img_base_url} from '../../api';
import './Card.css'
import {Link} from 'react-router-dom';
import cardDetail from '../CardDetail/CardDetail'

function Card({title, id, poster_path,movieDetail,getMovie}) {

    // const [movie, setMovie] = useState([]);
    // const [isCardClicked, setCardClick] = useState(false);

    // console.log(movieDetail)
    return (
        <Link  to="/carddetail" 
            onClick = {()=>{
                
                console.log('hi there')
                getMovie(movieDetail)
            }}>
            <div className='card'>
                <img className = "poster" alt={title} src={`${img_base_url}${poster_path}`}/>
                <h2 className="poster__title">{title}</h2>
            </div>
        </Link>
    )
}

export default Card
