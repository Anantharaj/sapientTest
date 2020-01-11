import React from "react";

export function Image(props) {
  return <img src={props.src} alt={props.src} />;
}

export function Titlebar(props) {
  return (
    <div className="titleBar">
      <div>{props.name}</div>
      <div>
        <span>id: {props.id}</span> - <span>created {props.created}</span>
      </div>
    </div>
  );
}

export function Tabs(props) {
  return (
    <div className="tabs">
      <div>{props.keyName}</div>
      <div>{props.valName}</div>
    </div>
  );
}
