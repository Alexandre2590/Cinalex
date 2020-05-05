import React, { useState } from "react";

const InputDays = (props) => {
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");

  const handleDay = (e) => {
    let val = e.target.value;
    if (val <= 31 && val > 0) {
      setDay(e.target.value);
      props.inputDayChange(e.target.value);
    }
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
    props.inputDayChangeTwo(e.target.value);
  };

  const divStyle = {
    width: "70px",
  };

  return (
    <>
      <div>
        Pour une duréé de :{" "}
        <div className="field is-inline-flex">
          <div className="control ">
            <input
              name="price"
              className="input is-primary is-small is-rounded "
              type="number"
              value={day}
              onChange={handleDay}
              style={divStyle}
            />{" "}
            jours / mois,
          </div>
        </div>
        <br />
      </div>
      à un taux journalier de :{" "}
      <div className="field is-inline-flex">
        <div className="control">
          <input
            name="price"
            className="input is-primary is-small is-rounded"
            type="number"
            value={price}
            onChange={handleChange}
            style={divStyle}
          />{" "}
          euros HT.
        </div>
      </div>{" "}
    </>
  );
};

export default InputDays;
