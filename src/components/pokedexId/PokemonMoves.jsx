import React from 'react'

const PokemonMoves = ({pokemon}) => {
  return (
    <section className='poke-id__moves'>
      <ul className='poke-id__moves-container'>
        {
          pokemon?.moves.map((move) => (
            <li key={pokemon.url} className='poke-id__moves'>{(move.move.name)}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default PokemonMoves
