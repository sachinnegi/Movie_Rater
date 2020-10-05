import {img_base_url} from '../../api';
import './Card.css'
import React from 'react'

function Card({title, id, poster_path}) {
    return (
        <div className='card'>
            <img className = "poster" alt={title} src={`${img_base_url}${poster_path}`}/>
            <h2 className="poster__title">{title}</h2>
        </div>
    )
}

export default Card
