import React, { useState } from "react";
import InputDays from "./InputDays";
import InputFrais from "./InputFrais";
import InputForfait from "./InputForfait";

const FormSimulateur = (props) => {
  const [day, setDay] = useState({a:""});
  let keyDay = 'a';
  const [price, setPrice] = useState({a:""});
  let keyPrice = 'a';
  const [forfait, setForfait] = useState({a:""});
  let keyForfait = 'a';
  const [frais, setFrais] = useState({a:""});
  let keyFrais = 'a';

  const [show, setShow] = useState(false);

  const calculSimlutateur = () =>{
    let jour = day[keyDay]
    let prix = price[keyPrice]
    let forf = forfait[keyForfait]
    let fra = frais[keyFrais]
    let calcDay = (Math.floor(jour) * Math.floor(prix))
    let calCom = (calcDay * 0.9) 
    let calFrais = (calCom - fra)
    let salNet = (calFrais * 0.516667)
    let revGlobalJour = Math.round(salNet + Math.floor(fra))

    let calForf= (Math.floor(forf)*0.88)
    let calFraisForf = (calForf - fra)
    let salNetForf = (calFraisForf* 0.5229)
    let revGlobalForf = Math.round(salNetForf + Math.floor(fra))


    
    if (jour !== "" && prix !=="" && forf ===""){
      return revGlobalJour
    }
    else {return revGlobalForf}
    

 
  }

  const handleToggleClick = () => {
    setShow(true)
  }

  const WarningBanner = (props)=>{
    if (!props.warn) {
      return null;
    }
    return (
      <div className="container">
        <div className="has-text-info">
           Le montant estimé de votre salaire net est de : {calculSimlutateur()} euros.
        </div>
      </div>
  
    );
  }
  
  
  return (
    <>
      {props.detail === "1" ? (
        <InputDays inputDayChange={(val) => setDay({a : val})} inputDayChangeTwo={(val) => setPrice({a : val})} />
      ) : (
        <InputForfait inputForfait={(val) => setForfait({a : val}) }/>
      )}
      <InputFrais onChange={(val) => setFrais({a : val})} />
      {show === false ? (<div className="has-text-centered">
        <button className="button is-primary " onClick={handleToggleClick}>Calculer</button>
      </div>):(<WarningBanner warn={show} />) }        
    </>
  );
};

export default FormSimulateur;
