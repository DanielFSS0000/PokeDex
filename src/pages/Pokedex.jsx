import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPoke from "../components/pokedex/CardPoke";
import InputSearch from "../components/pokedex/InputSearch";
import Pagination from "../components/pokedex/Pagination";
import SelectByType from "../components/pokedex/SelectByType";
import "../index.css"
import "./styles/pokedex.css"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");

  useEffect(() => {
    // Se ejecuta si seleccion un tipo y los filtra
    if (typeSelected !== "All Pokemons") {
      //typeSelected trae la URL en el valor del selector
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      // Si quiero todo los pokemons, no filtra por tipo
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  const userName = useSelector((state) => state.userName);

  // Logica de paginacion
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);

  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;

  return (
    <div>
      <header className="pokedex__header-container" >
      <img className='pokedex__img' src="/images/home/pokedex.png" alt="" />
        <p className='pokedex__header-p'>
          Welcome <span className='userName'>{userName}</span>, Here you can find your favorite
          pokemom.
        </p>
      </header>

      <aside className='pokedex__aside'>
        <InputSearch />
        <SelectByType 
        setTypeSelected={setTypeSelected} 
        setPage={setPage} />
      </aside>
      <Pagination
        page={page}
        //Nos da la cantidad maxima de paginas, solamente cuando ya se obtiene pokemon
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}
      />

      <main>
        <div className='card__container'>
          {
            // Slice retorna una parte del arreglo y no muta al arreglo inicial
            pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
              <CardPoke 
              key={pokemon.url} 
              url={pokemon.url} />
            ))
          }
        </div>
      </main>
      <Pagination
        page={page}
        //Nos da la cantidad maxima de paginas, solamente cuando ya se obtiene pokemon
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}
      />
    </div>
  );
};

export default Pokedex;
