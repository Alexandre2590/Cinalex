import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div className="field">
          <label className="label"></label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="username"
              ref={register({
                validate: value => value !== "admin" || "Nice try!"
              })}
              className="input is-success"
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

        <div className="field">
          <label className="label"></label>
          <div className="control">
            <input
              name="Job"
              ref={register({
                validate: value => value !== ""
              })}
              className="input"
              type="text"
              placeholder="               Secteur d'activité"
            />
          </div>
        </div>

        <div className="field">
          <label className="label"></label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email && errors.email.message}

            <input
              className="input is-danger"
              type="email"
              placeholder="            Email input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label"></label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="          Numéro de téléphone"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              Je suis d'accord d'être contacté:{" "}
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" /> Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" /> No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
