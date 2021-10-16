import React, { useState } from "react";
import Kwek from "./Kwek";
import Kwak from "./Kwak";

const Kwik = (props) => {
  return (
    <div>
      <Kwek kwaksStatus={props.kwaksStatus} kwakEuro={props.kwakEuro} />
      <Kwak
        kwaksStatus={props.kwaksStatus}
        kwakEuro={props.kwakEuro}
        changeStatus={(newStatus) => props.setKwaksStatus(newStatus)}
        changeEuro={(newEuro) => props.setKwakEuro(newEuro)}
      />
    </div>
  );
};

export default Kwik;
