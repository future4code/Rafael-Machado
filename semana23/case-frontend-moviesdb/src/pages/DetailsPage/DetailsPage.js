import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LANGUAGE } from '../../constants/language'
import { BASE_URL } from '../../constants/urls'
import { GeneralContainer, InfoContainer, MoviePoster, Overview, MainTitle, OriginalTitle } from './DetailsPage.styles'


const DetailsPage = () => {
    const [movie, setMovie] = useState({})
    const params = useParams()
    console.log("MOVIE DETAIL", movie)

    const getDetails = () => {
        axios.get(`${BASE_URL}/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}`)
        .then((res) => {
            setMovie(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <GeneralContainer>
            
            <InfoContainer>
                <MainTitle>
                    {movie.title}
                </MainTitle>
                <OriginalTitle>Título original: {movie.original_title}</OriginalTitle>

                
                <p>{movie.release_date}</p>
                <Overview>{movie.overview}</Overview>
                <p>Avaliação do TMDB: {movie.vote_average}</p>
            </InfoContainer>
            <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            

            
        </GeneralContainer>
    )
}

export default DetailsPage
