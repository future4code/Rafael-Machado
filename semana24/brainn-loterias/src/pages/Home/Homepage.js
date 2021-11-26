import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import { GeneralContainer, LeftCol, RightCol, TitleWrap, Title, LogoLoterias } from "./Homepage.styles"
import logoLoterias from "../../images/logo_cef.svg" 

const Homepage = () => {
  const [relacaoConcurso, setRelacaoConcurso] = useState([])
  const [concursoId, setConcursoId] = useState("")
  const [concursos, setConcursos] = useState([])
  console.log("CONCURSO", concursos)

  console.log("RELAÇÃO", relacaoConcurso)

  const getRelacaoConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setRelacaoConcurso(res.data[0])
        setConcursoId(res.data[0].concursoId)
        // getConcursosById(res.data[0].concursoId) --> outra forma de fazer a segunda requisição!
        // excluindo o segundo useEffect na linha 48 + adicionando essa linha de código
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getConcursosById = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getRelacaoConcursos()
  }, [])

  useEffect(() => {
    if (concursoId) getConcursosById(concursoId)
  }, [concursoId])

  console.log("ID DO CONCURSO", concursoId)

  return (
    <GeneralContainer>
      <LeftCol>
        
      </LeftCol>
      <TitleWrap>
          <LogoLoterias src={logoLoterias} />
          <Title>MEGA-SENA</Title>
        </TitleWrap>
      <RightCol>COLUNA DA DIREITA</RightCol>
    </GeneralContainer>
  )
}

export default Homepage
