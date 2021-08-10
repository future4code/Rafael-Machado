import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import PokeCard from './components/PokeCard/pokecard'
import { AppContainer } from "./styles"

const App = (props) => {
  const [pokelist, setPokelist] = useState([])
  const [pokeName, setPokename] = useState("")
  
  const getPokelist = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokelist(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPokelist()
  }, [])

  const changePokeName = (event) => {
    setPokename(event.target.value)
    
  }

    return (
      <AppContainer>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
        
      </AppContainer>
    )  
}

export default App;
