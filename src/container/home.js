import React, { Component } from "react";
import Axios from "axios";

import CardLayout from "../components/cardLayout";
import Filters from "../components/filters";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterList: [],
      searchName: ""
    };
  }

  getCharacterLists = () => {
    Axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      if (res.data && res.data.results) {
        this.setState({ characterList: res.data.results });
      } else {
        this.setState({ characterList: [] });
      }
    });
  };

  inputName = e => {
    this.setState({
      searchName: e.target.value
    });
  };

  searchByName = () => {
    let newChars = [];

    let search = this.state.searchName.toLowerCase();

    if (!search) {
      return this.getCharacterLists();
    }

    this.state.characterList.map(char => {
      let charName = char.name.toLowerCase();
      if (charName === search || charName.indexOf(search) > -1) {
        newChars.push(char);
      }
    });

    this.setState({
      characterList: newChars
    });
  };

  sortCharacters = e => {
    let value = e.target.value;

    let newChars = [...this.state.characterList];
    if (value === "asc") {
      newChars.sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id);
      });
    } else {
      newChars.sort((a, b) => {
        return parseInt(b.id) - parseInt(a.id);
      });
    }

    this.setState({
      characterList: newChars
    });
  };

  componentDidMount() {
    this.getCharacterLists();
  }

  doFilter(value) {
    console.log(this.state.characterList);
    const key = Object.keys(value)[0].toLowerCase();
    console.log(value[key]);

    const filterData = this.state.characterList.filter(data => {
      if (key === "human" || key === "mytholog" || key === "otherSpecies")
        return data.species.toLowerCase() === key;
    });
    this.setState({
      characterList: filterData
    });
  }

  render() {
    console.log(this.state.characterList);
    return (
      <div className="home-container">
        <Filters
          doFilter={val => {
            this.doFilter(val);
          }}
        ></Filters>
        <CardLayout
          characters={this.state.characterList}
          searchByName={this.searchByName}
          inputName={this.inputName}
          sortCharacters={this.sortCharacters}
        />
      </div>
    );
  }
}

export default Home;
