import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({setTypeSelected, setPage}) => {

const [types, setTypes] = useState()

useEffect(() => {
const URL = 'https://pokeapi.co/api/v2/type'
  axios.get(URL)
    .then(res => setTypes(res.data.results))
    .catch(err => console.log(err))
}, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setPage(1)
  }

  return (
    <select onChange={handleChange}>
      {/* EN lista los pokemones por tipo en un select */}
        <option value="All Pokemons">All pokemons</option>
        {
          //se retorna implicitamente con el parentesis
          types?.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default SelectByType