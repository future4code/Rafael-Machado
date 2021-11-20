import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LANGUAGE } from '../../constants/language'
import { BASE_URL } from '../../constants/urls'
import { GeneralContainer, InfoContainer, MoviePoster, Overview, MainTitle, OriginalTitle, GenderWrap, DateRunTime } from './DetailsPage.styles'


const DetailsPage = () => {
    const [movie, setMovie] = useState({})
    const params = useParams()
    console.log("MOVIE", movie)

    

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

    const revenue = movie && movie.revenue

    const numberDollar = revenue && revenue.toLocaleString("pt-BR", {style: "currency", currency: "USD"})
    
    const movieGenres = movie.genres


    const ConvertedTime = () => {
        const runtime = movie && movie.runtime
        const hours = Math.floor(runtime / 60);          
        const minutes = runtime % 60;

        return `${hours} h ${minutes} min`
    }
    
    console.log(ConvertedTime())

    return (
        <GeneralContainer>
            
            <InfoContainer>
                <MainTitle>
                    {movie.title}
                </MainTitle>
                <OriginalTitle>Título original: {movie.original_title}</OriginalTitle>
                <DateRunTime>
                <p>{movie.release_date}</p>
                <p>{ConvertedTime()}</p>
                </DateRunTime>
                
                <Overview>{movie.overview}</Overview>
                <p>Avaliação do TMDB: ⭐ <strong>{movie.vote_average}</strong></p>
                <p>Arrecadação: {numberDollar}</p>
                <GenderWrap>
                 {movieGenres && movieGenres.map((item) => 
                    
                    <p key={item.id}>{item.name}</p>
                
                    )}
                </GenderWrap>
                
            </InfoContainer>
            <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            
        </GeneralContainer>
    )
}

export default DetailsPage
