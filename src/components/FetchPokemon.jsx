import React, {useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

const FetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        // console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button className="my-3" onClick={fetchPokemon}>
        Listar los Pokemon
      </Button>
      <ListGroup>
        {pokemon.map((pokemon, index) => {
          return <ListGroup.Item key={index}>{pokemon.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
};

export default FetchPokemon;
