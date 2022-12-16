import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { getAllPokemon, getPokemon } from "./utils/pokemon.js";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // All Polemon
      let res = await getAllPokemon(initialURL);
      // Each Pokemon
      loadPokemon(res.results);
      // console.log(res)
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, index) => (
                <Card key={index} pokemon={pokemon} />
              ))}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>Prev</button>
              <button onClick={handleNextPage}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
