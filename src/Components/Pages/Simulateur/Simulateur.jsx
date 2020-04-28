import React, { useState } from "react";
import FormSimulateur from "./Components/FormSimulateur";

const Simulateur = () => {
  const [state, setState] = useState("1");

  console.log(state);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <div className="columns">
        <div className="column"></div>
        <div className="box is-two-fifths">
          <h1 className="title is-4">Simulateur de portage salarial</h1>
          <div className="container"></div>
          Je facture ma mission au temps passé par :{" "}
          <div className="select is-small is- left is-rounded is-primary ">
            <select name="value" defaultValue={state} onChange={handleChange}>
              <option value="1">jours</option>
              <option value="2">forfait</option>
            </select>
          </div>
          <br />
          <br />
         <FormSimulateur detail= {state}/>
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};

export default Simulateur;
