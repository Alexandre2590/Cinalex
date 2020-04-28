import React, { useState } from "react";
import InputDays from "./InputDays";
import InputFrais from "./InputFrais";
import InputForfait from "./InputForfait";


const FormSimulateur = (props) => {

const [state, setState] = useState();

const handleSubmit = (e) => {
e.preventDefault()
console.log(e.currentTarget.value)
console.log("ça marche")
}

const callbackFunction = childData => {
  console.log(childData)
    setState(childData)
}

  return (
    <>{state}
      <form onSubmit={handleSubmit}>
        {props.detail === "1" ? <InputDays parentsCallback ={callbackFunction}/> : <InputForfait />}
        <InputFrais />
        <div className="has-text-centered">
          <button className="button is-primary ">Calculer</button>
        </div>
      </form>
    </>
  );
};

export default FormSimulateur;
