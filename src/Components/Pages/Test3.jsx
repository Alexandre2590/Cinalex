import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Test3 = () => {
  const [state, setState] = useState();

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    setState(data);
  };
  console.log(state)
  
  const validationMessage = () => {
    console.log("hello");
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        {/* champ Nom prénom */}
        <div className="field">
          {" "}
          <label className="label"></label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="name"
              ref={register({ required: true })}
              className={`input ${errors.name && "is-danger"}`}
              type="text"
              placeholder="          Nom prénom"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        {/* secteur d'activité*/}
        <div className="field">
          {" "}
          <label className="label"></label>
          <div className="control">
            <input
              name="job"
              ref={register({ required: true })}
              className={`input ${errors.job && "is-danger"}`}
              type="text"
              placeholder="               Secteur d'activité"
            />
          </div>
        </div>

        {/* Bouttons soumettre  */}
        <div className="field is-grouped">
          {" "}
          <div className="control">
            <button
              className="soumettre button is-link"
              onClick={validationMessage}
            >
              Soumettre
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test3;
