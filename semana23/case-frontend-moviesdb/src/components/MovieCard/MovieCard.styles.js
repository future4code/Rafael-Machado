import styled from "styled-components"

export const MovieCardContainer = styled.div`
    border-radius: 10px;
    margin-bottom: 12px;
    width: 300px;
    height: 400px;
    margin: 15px;
    /* box-shadow */
    

    &:hover {
        cursor: pointer;
    }
`

export const CardImage = styled.img`
    border-radius: 10px;
    /* background-size: cover;
    background-position: center; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;

`



