import React, { createContext, useState } from "react";

const status = {
  wakker: "wakker",
  slaperig: "slaperig"
};

const StatusContext = createContext(status);

const Disney = (props) => {
  return (
    <div>
      <p>Disney</p>
      <Donald />
      <Kwik />
      <Kwek />
      <Kwak />
    </div>
  );
};

const Donald = (props) => {
  return (
    <div>
      <p>Donald</p>
    </div>
  );
};

const Kwik = () => {
  const [statuskwak, setStatuskwak] = useState("wakker");

  return (
    <div>
      <Kwak changeStatus={(statuskwak) => setStatuskwak(statuskwak)} />
    </div>
  );
};

const Kwek = (props) => {
  return (
    <div>
      <p>Kwek</p>
    </div>
  );
};

const Kwak = (props) => {
  const [numberofeuro, setNumberofeuro] = useState(10);
  return (
    <div>
      <p>
        Kwak is {props.statuskwaks} en heeft €{numberofeuro}
      </p>
      <button onClick={() => props.changeStatus("slaperig")}>
        Verander Status van Kwak
      </button>
      <button onClick={() => setNumberofeuro(numberofeuro + 1)}>
        Geef Kwak 1 euro
      </button>
    </div>
  );
};

export default Disney;
