import React, { Component } from "react";
import axios from "axios";
export default class APIExample extends Component {
  state = {
    pokemon: null,
    error: ""
  };
  async componentDidMount() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
      const pokemon = response.data;
      this.setState({ pokemon });
    } catch (error) {
      this.setState({ error: "Oops something went wrong!" });
    }
  }
  render() {
    const { pokemon, error } = this.state;
    if (!pokemon && !error) return <div />;
    return (
      <>
        <h2>POKEMON INFORMATION</h2>
        {pokemon && (
          <>
            <p>name: {pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </>
        )}
        {error && <p data-testid="error">{error}</p>}
      </>
    );
  }
}
