import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
// import { Photo } from "./styles";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})    
    // valor do estado que guarda infos e foto do pokemon
    
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

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [pokemon])

    // console.log(this.state.pokemon)
    // const pokemon = this.state.pokemon; <<<<<<<<<<<<
    return (    
      <div>
          
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
            
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          
        )}   
      </div>
    )
}
export default PokeCard
