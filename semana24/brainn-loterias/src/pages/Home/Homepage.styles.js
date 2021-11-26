import styled from "styled-components"

export const GeneralContainer = styled.div`
  display: flex;
  background-color: #efefef;
`
export const LeftCol = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: gold; */
  
  /* top: 0;
  bottom: 0;
  right: 0;
  left: 0; */
  /* top: 0; */
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #6befa3;
  z-index: 0;
  transform: skewX(10deg);
  transform-origin: right bottom;
  position: relative;
`

export const RightCol = styled.div`
  flex: 0.7;
  flex-direction: column;
  background-color: #efefef;
`

export const TitleWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  top: 50%;
`

export const Title = styled.p`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0 0.8em;
`

export const LogoLoterias = styled.img`
  color: #fff;
  width: 60px;
  height: 60px;
` 
