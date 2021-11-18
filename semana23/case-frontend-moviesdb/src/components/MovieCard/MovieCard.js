import React from 'react'
import { CardImage, MovieCardContainer } from './MovieCard.styles'
// import cardImage from "../../images/card_image_test.jpg"


const MovieCard = () => {
    return (
        <MovieCardContainer>
            <CardImage src="https://www.themoviedb.org/t/p/w220_and_h330_face/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg" />
        </MovieCardContainer>
    )
}

export default MovieCard
