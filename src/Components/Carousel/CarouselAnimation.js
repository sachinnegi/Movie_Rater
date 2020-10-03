import React from 'react'
import { Carousel } from 'antd';
import './Carousel.css';
function CarouselAnimation() {
   
    return (
        <div >
          
            <Carousel autoplay speed= {1000} autoplaySpeed = {2500} className= 'car'>
                <div className = "indiv">
                    <img className='image' src="http://image.tmdb.org/t/p/w342/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"/>
                </div>
                <div className = "indiv">
                    <img className='image' src="http://image.tmdb.org/t/p/w342/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"/>
                </div>
                <div className = "indiv">
                    <img className='image' src="http://image.tmdb.org/t/p/w342/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"/>
                </div>
                <div className = "indiv">
                    <img className='image' src="http://image.tmdb.org/t/p/w342/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"/>
                </div>
            </Carousel>
               
        </div>
    )
}

export default CarouselAnimation
