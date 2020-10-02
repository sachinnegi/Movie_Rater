import React from 'react'
import {movieURL, tvShowURL, img_base_url} from '../../api';
import Card from '../Card/Card';

function Home() {
    return (
        <div className="homepage">
            <Card url={movieURL.popular} />
        </div>
    )
}

export default Home
