import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      human: true,
      mytholog: true,
      otherSpecies: true,
      male: true,
      female: true,
      unknown: true,
      nuptia: true,
      otherOrgin: true
    };
  }

  toggleChange = name => {
    console.log(name);
    this.setState({
      [name]: !this.state[name]
    });
    //this.props.doFilter({ [name]: this.state[name] });
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
                name="male"
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
                name="female"
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
                name="unknown"
                checked={this.state.unknown}
                onChange={() => {
                  this.toggleChange("unknown");
                }}
              />
              UnKnown
            </label>
            <label>
              <input
                type="checkbox"
                name="post"
                checked={this.state.post}
                onChange={() => {
                  this.toggleChange("post");
                }}
              />
              Post-Apocatyptic
            </label>
            <label>
              <input
                type="checkbox"
                name="nuptia"
                checked={this.state.nuptia}
                onChange={() => {
                  this.toggleChange("nuptia");
                }}
              />
              Nuptia 4
            </label>
            <label>
              <input
                type="checkbox"
                name="otherOrgin"
                checked={this.state.otherOrgin}
                onChange={() => {
                  this.toggleChange("otherOrgin");
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
