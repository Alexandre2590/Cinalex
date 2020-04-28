import React, { useState } from "react";

const InputForfait = () => {
  const [forfait, setForfait] = useState("");

  const handleChange = (e) => {
    setForfait(e.target.value);
  };
   
  const divStyle = {
    width: "70px",
  };

  return (
    <>
      <div>
        Pour un forfait de {" "}
        <div className="field is-inline-flex">
          <div className="control ">
            <input
              className="input is-primary is-small is-rounded "
              type="number"
              //placeholder="Nombre de jours/mois "
              value={forfait}
              onChange={handleChange}
              style={divStyle}
            /> <>{" "}</> {" "} jours / mois,
          </div>
        </div>
        <br />
      </div>
      
      
    </>
  );
};

export default InputForfait;
