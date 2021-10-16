import React, { useState } from "react";
import Kwik from "./Kwik";

const Donald = (props) => {
  const [statuskwak, setStatuskwak] = useState("wakker");
  const [numberofeuroKwak, setNumberofeuroKwak] = useState(0);
  return (
    <div>
      <p>
        Donald weet nu ook dat de status van Kwak {statuskwak} is en dat ie €
        {numberofeuroKwak} heeft
      </p>
      <Kwik
        kwaksStatus={statuskwak}
        setKwaksStatus={setStatuskwak}
        kwakEuro={numberofeuroKwak}
        setKwakEuro={setNumberofeuroKwak}
      />
    </div>
  );
};

export default Donald;
