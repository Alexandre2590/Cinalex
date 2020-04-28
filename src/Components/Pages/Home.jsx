import React from "react";
import Logo from "../../Images/logo.png";
import ButtonForm from "./home/ButtonForm";
import Cindy from "../../Images/cindy.png";

const Home = () => {
 

  return (
    <div>
      <div className="has-text-centered">
        <div className="container">
          <img src={Logo} className="logohome image is-96x96" alt="logohome" />
          <h1 className="inalex title is-1">CINALEX</h1>
        </div>
        {/* simulateur
gros avantages du portage slariale
+ photo Cindy pour le contacter nous */}
        <br />
      </div>
      <h1 className="title has-text-centered">Portage salarial</h1>
      <br />
      <h2 className="subtitle has-text-centered	">
        Concentrez-vous sur votre coeur d'activité on s'occupe du reste.{" "}
      </h2>
      <br/>
      {/* image/icone CINDY */}
      <div className="columns">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column is-narrow">
          <div className="">
            <div className="image is-96x96">
              <img className="is-rounded" src={Cindy} alt=""  />
            </div>
          </div>
        </div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="has-text-centered">Cindy Mamou  expert-comptable</div>
      <br/>

      <div className="has-text-centered">
        <ButtonForm />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
