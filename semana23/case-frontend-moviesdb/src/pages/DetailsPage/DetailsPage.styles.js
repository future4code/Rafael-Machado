import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io"

export const GeneralContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
        height: 100%;

    }
    

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
    background-color: #313131;
    border-radius: 10px;
    margin-right: 30px;
    height: auto;

    @media screen and (max-width: 800px) {
        margin: 10px;

    }

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

export const GenderWrap = styled.div`
    display: flex;
    justify-content: left;

    p {
        margin-right: 50px;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px;
        align-items: center;
    }

    @media screen and (max-width: 810px) {
        flex-wrap: wrap;

        p {
        margin-right: 20px;
    }
    }

`

export const DateRunTime = styled.div`
    display: flex;
    justify-content: space-around;
    justify-content: left;

    p {
        margin-right: 40px;
    }
`


export const MoviePoster = styled.img`
    border-radius: 10px;
    width: 450px;
    height: 600px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
    

    @media screen and (max-width: 800px) {
        width: 90%;
        height: 65%;
        justify-Content: center;
        margin: 10px;
        max-width: 450px;
        
        
    }
`

export const BackButton = styled(IoIosArrowBack)`
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-top: 20px;
`