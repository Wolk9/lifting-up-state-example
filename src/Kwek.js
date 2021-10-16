import React, { useState } from "react";

const Kwek = (props) => {
  return (
    <div>
      <p>
        Kwek weet dat Kwak {props.kwaksStatus} is en dat hij €{props.kwakEuro}
        heeft
      </p>
    </div>
  );
};

export default Kwek;
