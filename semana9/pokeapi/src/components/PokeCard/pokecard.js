import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import { Photo } from "./styles";
import styled from "styled-components"

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})    
    // valor do estado que guarda infos e foto do pokemon >> OBJETO
    
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data)
        // console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
    // console.log("PROPS", props.nomePokemon)
    useEffect(() => {
        pegaPokemon(props.nomePokemon) // Aqui é como o DidMount -- 
    }, [props.nomePokemon]) // Aqui é como o DidUpdate

   
    // console.log(pokemon)
    return (    
      <div>
          
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>} 
        {pokemon.sprites && (
            
          <Photo src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          
        )}   
      </div>
    )
}
export default PokeCard

