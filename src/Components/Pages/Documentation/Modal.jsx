import React from "react";

export default function Modal() {
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Simulateur de salaire en portage salarial</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body"></section>
          <footer className="modal-card-foot ">
            <button className="button is-success ">Calculer</button>
          </footer>
        </div>
      </div>
    </>
  );
}
