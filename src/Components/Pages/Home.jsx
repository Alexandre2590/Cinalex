import React from "react";
import Picture from "../../Images/PictureHome.jpg";
import Logo from "../../Images/logo.png";
import ButtonForm from "./home/ButtonForm"

const Home = () => {
  return (
    <div>
      <div className="has-text-centered">
        <div className="container">
          <img src={Logo} className="logohome image is-96x96" />
          <h1 className="inalex title is-1">CINALEX</h1>
        </div>

        <br />
      </div>
      <h1 className="title has-text-centered">Portage salarial</h1>
      <br />
      <h2 class="subtitle has-text-centered	">
        Concentrez-vous sur votre coeur d'activité on s'occupe du reste.{" "}
      </h2>
      <div className="has-text-centered">
      <ButtonForm/>
      </div><br />
      <br />
    </div>
  );
};

export default Home;
