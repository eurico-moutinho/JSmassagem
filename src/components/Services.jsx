import React from "react";

function Services() {
  return (
    <>
      <section id="services">
        <h1>Serviços</h1>
        <div className="servCard">
          <figure>
            <img src="../massagemdesport.jpg" />
            <figcaption>Massagem Desportiva</figcaption>
          </figure>
          <figure>
            <img src="../cupping.jpg" />
            <figcaption>Terapia Cupping</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Services;
