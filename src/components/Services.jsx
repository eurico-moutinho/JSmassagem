import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <>
      <section id="services">
        <h1>Serviços</h1>
        <div className="servCard">
          <div className="figure">
            <img src="../massagemdesport.jpg" />
            <figcaption>Massagem Desportiva</figcaption>
          </div>
          <div className="figure">
            <img src="../massagemtera.jpg" />
            <figcaption>Massagem Terapêutica</figcaption>
          </div>
          <div className="figure">
            <img src="../cupping.jpg" />
            <figcaption>Ventosaterapia</figcaption>
          </div>
          <div className="figure">
            <img src="../pressotherapy.jpg" />
            <figcaption>Pressoterapia</figcaption>
          </div>
          <div className="figure">
            <img src="../osteopathy.jpg" />
            <figcaption>Osteopatia</figcaption>
          </div>
        </div>
        <h1>
          Se algum destes serviços lhe interessar pode fazer a sua marcação{" "}
          <NavLink
            style={{ color: "blue", textDecoration: "none" }}
            to="/marcacao"
          >
            aqui
          </NavLink>
        </h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../1.jpg" className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="../2.jpg" className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="../3.jpg" className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="../4.jpg" className="d-block" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Services;
