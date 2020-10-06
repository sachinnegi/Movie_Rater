import React from 'react'
import { movieURL } from '../../api'
import {img_base_url} from '../../api';
import './CardDetail.css'

function CardDetail({movieDetail}) {
    console.log(movieDetail)
    if (movieDetail){
        return (
            <div className = "CardDetail__container">
                <div className="CardDetail__image">
                    
                </div>
                <div className="CardDetail__detail">
                    <h1 className="CardDetail__title">{movieDetail.title || movieDetail.name}</h1>
                </div>
            </div>
        )
    }
    else{
        return (
            <h1></h1>
        )
    }
}

export default CardDetail
