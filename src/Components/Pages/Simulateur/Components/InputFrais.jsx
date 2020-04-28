import React, { useState } from "react";

const InputFrais = () => {
  const [frais, setFrais] = useState("");

  const handleChange = (e) => {
    setFrais(e.target.value);
  };

  const divStyle = {
    width: "70px",
  };

  return (
    <>
      <div className="field">
        <div className="control">
          J'ai{" "}
          <input
            name="frais"
            className="input is-primary is-small is-rounded"
            type="number"
            //placeholder="frais"
            value={frais}
            onChange={handleChange}
            style={divStyle}
          />{" "}
          <div className="is-inline-flex"> euros de frais professionnels</div>
        </div>

        <div className="column"></div>
      </div>
    </>
  );
};

export default InputFrais;
