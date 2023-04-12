import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const BoxApi = styled.div`
  border: solid orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class App extends Component {
  state = {
    informacoes: []
  };

  PegarPersonagens = async () => {
    const resp = await Api.get();

    const Itens = resp.data.results.map((item) => {
      return {
        ...item
      };
    });
    this.setState({
      informacoes: Itens
    });
  };

  componentDidMount() {
    this.PegarPersonagens();
  }

  render() {
    return (
      <div>
        <h1> API Rick and Morty</h1>
        <BoxApi>
          {this.state.informacoes.map((item) => (
            <div>
              <img src={item.image} alt="" />
              <h2> {item.name} </h2>
              <p> {item.status} </p>
            </div>
          ))}
        </BoxApi>
      </div>
    );
  }
}
