import React from "react";
import { Image, Titlebar, Tabs } from "./utilityComponents";

function Card(props) {
  return (
    <div className="card-container">
      {props.characters.map(char => {
        return (
          <div className="card" key={char.id}>
            <Image src={char.image} />
            <Titlebar name={char.name} id={char.id} created={props.created} />
            <Tabs keyName="Staus" valName={char.status} />
            <Tabs keyName="Species" valName={char.species} />
            <Tabs keyName="Gender" valName={char.gender} />
            <Tabs keyName="Origin" valName={char.origin.name} />
            <Tabs keyName="Last Location" valName={char.location.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
