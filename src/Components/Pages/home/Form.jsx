import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  
  const { handleSubmit, register, errors } = useForm();
  
  const [state, setState] = useState();

  console.log(state)

  const onSubmit = (data, e) => {
    setState({state : data})
    //console.log(data);
    e.target.reset(); // reset after form submit
  };

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

        {/* Email input*/}
        <div className="field">
          {" "}
          <label className="label"></label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="Email"
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
              className={`input ${errors.Email && "is-danger"}`}
              placeholder="                E-mail"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        {/* Numéro de tel  */}
        <div className="field">
          {" "}
          <label className="label"></label>
          <div className="control">
            <input
              name="Number"
              ref={register({
                required: false,
                validate: (value) =>
                  value === Number || value.length === 10 || value === "",
              })}
              className="input"
              placeholder="          Numéro de téléphone"
            />
          </div>
        </div>

        {/* Message     */}
        <div className="field">
          {" "}
          <label className="label">Message</label>
          <div className="control">
            <textarea
              name="Message"
              ref={register({
                validate: (value) => value.length > 2 || value === "",
              })}
              className="textarea"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>

        {errors.name || errors.job || errors.name ? (
          <>
            <div className="has-text-danger">
              Veuillez remplir tous les champs
            </div>
            <br />
          </>
        ) : (
          <p></p>
        )}
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

export default Form;
