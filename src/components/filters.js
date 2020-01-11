import React, { Component } from "react";
import Card from "./card";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      human: true,
      mytholog: true,
      otherSpecies: true,
      male: true,
      female: true
    };
  }

  toggleChange = name => {
    console.log(name);
    this.setState({
      [name]: !this.state[name]
    });
    this.props.doFilter({ [name]: this.state[name] });
  };

  render() {
    return (
      <div className="filter-container">
        <h5>Filters</h5>
        <div>
          <div className="species-filter">
            <h5>Species</h5>
            <label>
              <input
                type="checkbox"
                name="human"
                checked={this.state.human}
                onChange={() => {
                  this.toggleChange("human");
                }}
              />
              Human
            </label>
            <label>
              <input
                type="checkbox"
                name="mytholog"
                checked={this.state.mytholog}
                onChange={() => {
                  this.toggleChange("mytholog");
                }}
              />
              Mytholog
            </label>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.otherSpecies}
                onChange={() => {
                  this.toggleChange("otherSpecies");
                }}
              />
              Other Species
            </label>
          </div>
          <div className="species-filter">
            <h5>Gender</h5>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.male}
                onChange={() => {
                  this.toggleChange("male");
                }}
              />
              Male
            </label>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.female}
                onChange={() => {
                  this.toggleChange("female");
                }}
              />
              Female
            </label>
          </div>
          <div className="species-filter">
            <h5>Orgin</h5>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.otherSpecies}
                onChange={() => {
                  this.toggleChange("otherSpecies");
                }}
              />
              UnKnown
            </label>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.otherSpecies}
                onChange={() => {
                  this.toggleChange("otherSpecies");
                }}
              />
              Post-Apocatyptic
            </label>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.otherSpecies}
                onChange={() => {
                  this.toggleChange("otherSpecies");
                }}
              />
              Nuptia 4
            </label>
            <label>
              <input
                type="checkbox"
                name="otherSpecies"
                checked={this.state.otherSpecies}
                onChange={() => {
                  this.toggleChange("otherSpecies");
                }}
              />
              Other Orgin
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
