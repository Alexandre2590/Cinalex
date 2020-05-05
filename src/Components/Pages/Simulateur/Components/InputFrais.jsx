import React, { useState } from "react";

const InputFrais = (props) => {
  const [frais, setFrais] = useState("");

  const divStyle = {
    width: "70px",
  };

  const HandleSubmit  =  (e) => {
   props.onChange(e.target.value)
   setFrais(e.target.value)
  }

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
            onChange={HandleSubmit}
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
