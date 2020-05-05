import React, { useState } from "react";

const InputForfait = (props) => {
  const [forfait, setForfait] = useState("");

  const handleChange = (e) => {
    setForfait(e.target.value);
    props.inputForfait(e.target.value);

  };
   
  const divStyle = {
    width: "85px",
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
              value={forfait}
              onChange={handleChange}
              style={divStyle}
            /> <>{" "}</> {" "} euros HT / mois,
          </div>
        </div>
        <br />
      </div>
      
      
    </>
  );
};

export default InputForfait;
