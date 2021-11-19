import styled from "styled-components"

export const GeneralContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 50px;
    width: 60vw;
    max-width: 600px;
    min-width: 300px;
    justify-content: center;
    
`

export const MainTitle = styled.div`
    line-height: 1.1em;
    font-weight: 700;
    font-size: 1.7rem;

    @media screen and (max-width: 800px) {
        line-height: 1.2em;

    }
`

export const OriginalTitle = styled.p`
    line-height: 1.3em;
`

export const Overview = styled.p`
    text-align:justify;
    line-height: 1.7;
`


export const MoviePoster = styled.img`
    border-radius: 10px;
    width: 400px;
    height: 550px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
`