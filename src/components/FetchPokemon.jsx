// fetch pokemon names from the api and display them in a list with a button that fetches the pokemon data

import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

const FetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const pokemon = data.results.map((pokemon) => pokemon.name);
        setPokemon(pokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button className="my-3" variant="secondary" onClick={fetchPokemon}>
        Fetch Pokemon
      </Button>
      {pokemon.map((pokemon, index) => {
        return (
          <ListGroup>
            <ListGroup.Item key={index}>{pokemon}</ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};

export default FetchPokemon;
