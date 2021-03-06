import React, { Component } from "react";
import Card from "./card";

class CardLayout extends Component {
  render() {
    return (
      <div className="cardLayout-container">
        <div className="toolBar">
          <div>
            <span>Search by Name</span>
            <input
              type="text"
              name="username"
              onChange={this.props.inputName}
            />
            <button onClick={this.props.searchByName}>search</button>
          </div>

          <div>
            <select onChange={this.props.sortCharacters}>
              <option value="asc" disabled>
                sort by id
              </option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {this.props.characters.length === 0 && <div>No record found!!</div>}

        {this.props.characters.length > 0 && (
          <Card characters={this.props.characters} />
        )}
      </div>
    );
  }
}

export default CardLayout;
