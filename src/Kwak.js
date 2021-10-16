import React, { useState } from "react";

const Kwak = (props) => {
  return (
    <div>
      <p>
        Kwak is {props.kwaksStatus} en heeft €{props.kwakEuro}
      </p>
      <button onClick={() => props.changeStatus("slaperig")}>
        Verander Status van Kwak in slaperig
      </button>
      <button onClick={() => props.changeStatus("wakker")}>
        Verander Status van Kwak in wakker
      </button>
      <button onClick={() => props.changeEuro(props.kwakEuro + 1)}>
        Geef Kwak 1 euro
      </button>
    </div>
  );
};

export default Kwak;
