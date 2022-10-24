import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import PokemonMoves from '../components/pokedexId/PokemonMoves'
import "../components/pokedexId/pokedexId.css"

const PokedexById = () => {

  const {id} = useParams()//Captura el parametro 

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])
  
  if(hasError){
    return <Pokemon404 />
  }

  return (
    <article className='poke-id'>
      <header className={`poke-id__header bg-${pokemon?.types[0].type.name}`}>
        <img className='poke-id__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>

      <section > 
        <h2 className={`poke-id__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
      </section>

      <div className='poke-id__info'>
        <p className='poke-id__type-label'>Type</p>

        <section className='poke-id__types'>

          <ul className='poke-id__types-container'>
            {
              pokemon?.types.map(type => (
                <li key={type.slot} className={`poke-id__type bg-${pokemon?.types[0].type.name}`}>{type.type.name}</li>
              ))
            }

          </ul>


        </section>

        <section className='poke-id__types'>
          <p className='poke-id__type-label'>Abilities</p>

          <ul className='poke-id__types-container'>
            {
              pokemon?.abilities.map(ability => (
                <li key={ability.slot} className='poke-id__ability'>{ability.ability.name}</li>
              ))
            }

          </ul>

        </section>
      </div>


      <h2 className={`move-name poke-id__header bg-${pokemon?.types[0].type.name}`}>Moves</h2>
      
      <PokemonMoves pokemon={pokemon}/>

    </article>
  )
}

export default PokedexById