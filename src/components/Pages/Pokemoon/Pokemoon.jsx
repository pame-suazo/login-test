import React, { useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import Avatar from '@mui/material/Avatar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './Pokemoon.css'; 

export function Pokemoon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon no encontrado');
        }
        return response.json();
      })
      .then((data) => {
        const pokemonInfo = {
          name: data.name,
          types: data.types.map((type) => type.type.name),
          abilities: data.abilities.map((ability) => ability.ability.name),
          imageUrl: data.sprites.front_default,
          weight: data.weight / 10,
          height: data.height / 10,
        };
        setPokemonData(pokemonInfo);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPokemonData(null);
      });
  };

  return (
    <div>
      <NavBar className="navbar" />

      <div className="pokemon-container">
        <div className="overlai"></div>
        <div className='poke-container'>
          <div className="search-container">
            <div className="logo-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png"
                alt="Pokémon Logo"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Nombre del Pokémon"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <CatchingPokemonIcon className="pokeIcon" onClick={handleSearch} />
            </div>
          </div>
          <div className="separator"></div>
          {/* Lado derecho (respuestas) */}
          <div className="results-container">
            {error && (
              <div className="error-message">
                <SentimentVeryDissatisfiedIcon style={{width:"80px", height:"80px", color:"#3d6fb3"}}/>
                <p>{error}</p>
              </div>
            )}
            {pokemonData && !error && (
              <div className="flex">
                <div className="pokemon-details">
                  <h2>{pokemonData.name}</h2>
                  {pokemonData.types && (
                    <p>
                      <strong>Types:</strong> {pokemonData.types.join(', ')}
                    </p>
                  )}
                  {pokemonData.abilities && (
                    <p>
                      <strong>Abilities:</strong> {pokemonData.abilities.join(', ')}
                    </p>
                  )}
                  <p>
                    <strong>Weight:</strong> {pokemonData.weight} kg
                  </p>
                  <p>
                    <strong>Height:</strong> {pokemonData.height} m
                  </p>
                </div>
                <Avatar alt={pokemonData.name} src={pokemonData.imageUrl} sx={{ width: 200, height: 200 }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemoon;
