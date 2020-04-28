import React, { useState } from "react";

const InputDays = () => {
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");

  const handleDay = (e) => {
    let val = e.target.value;

    if (val <= 31 && val>0) {
      return setDay(e.target.value);
    }
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  
  console.log(day);
  console.log(price);

  const divStyle = {
    width: "70px",
  };

//   const sendData = (props) => {
//     props.parentCallback(day);
// }

  return (
    <>
      <div>
        Pour une duréé de :{" "}
        <div className="field is-inline-flex">
          <div className="control ">
            <input
              className="input is-primary is-small is-rounded "
              type="number"
              //placeholder="Nombre de jours/mois "
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
            //placeholder="Facturation HT / jours  "
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
