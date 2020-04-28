import React, { useState } from "react";

const Test = () => {
  const [time, setTime] = useState({
    value: 1,
  });
  const [day, setDay] = useState("");
  const [state, setState] = useState({
    price: "",
    frais: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTime({ ...time, [e.target.name]: value });
    setState({ ...state, [e.target.name]: value });
  };
  console.log(time.value);
  const DisplayByDayOrFlateRate = (props) => {
    if (time.value === 1 || time.value === "1") {
      return (
        <div>
          <div>
            Pour une duréé de :{" "}
            <div className="field is-inline-flex">
              <div className="control ">
                <input
                  className="input is-primary is-small is-rounded "
                  type="number"
                  placeholder="Nombre de jours/mois "
                  value={day}
                  onChange={handleDay}
                  style={divStyle}
                />
              </div>
            </div>
          </div>
          à un taux journalier de :{" "}
          <div className="field is-inline-flex">
            <div className="control">
              <input
                name="price"
                className="input is-primary is-small is-rounded"
                type="number"
                placeholder="Facturation HT / jours  "
                value={state.price}
                onChange={handleChange}
                style={divStyle}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div>forfait </div>;
    }
  };

  const handleDay = (e) => {
    let val = e.target.value;

    if (val <= 31) {
      return setDay(e.target.value);
    }
  };

  const divStyle = {
    width: "70px",
  };

  return (
    <>
      <div className="columns">
        <div className="column"></div>
        <div className="box is-two-fifths">
          <br />
          <br />
          <br />
          <div className="container"></div>
          Je facture ma mission au temps passé par :{" "}
          <div className="select is-small is- left is-rounded is-primary ">
            <select
              name="value"
              defaultValue={time.value}
              onChange={handleChange}
            >
              <option value="1">jours</option>
              <option value="2">forfait</option>
            </select>
          </div>
          <br />
          <DisplayByDayOrFlateRate warn={time} />
          <div className="field">
            <div className="control">
              J'ai{" "}
              <input
                name="frais"
                className="input is-primary is-small is-rounded"
                type="number"
                placeholder="frais"
                value={state.frais}
                onChange={handleChange}
                style={divStyle}
              />
            </div>
            <div className="is-inline-flex">de frais professionnels</div>

            <div className="column"></div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};

export default Test;
