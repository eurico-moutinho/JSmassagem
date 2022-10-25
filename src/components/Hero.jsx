import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

function Hero() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <section id="hero">
        <div className="container">
          <img src="../banner.png" id="imghero" />
          <div className="ban">
            <p>
              <span>
                Usufrua de uma massagem desportiva feita por um massagista
                desportivo especialista.
              </span>
              <div id="paragraph">
                Faça a marcação
                <br />
                <NavLink style={{ color: "white" }} to="/marcacao">
                  Aqui
                </NavLink>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div
          ref={ref}
          id="subabout"
          className={isInView ? "slider slider--zoom" : "slider"}
        >
          <div>
            <h1>Sobre:</h1>
            <br />
            <p>
              Massagista e Terapeuta certificado com experiência na ârea desde
              2016. Em 2020 foi criado este centro de recuperação com o intuito
              de colaborar na recuperação do seu desempenho físico e mental,
              usando uma combinação de massagens e outras técnicas terapeuticas.
            </p>
          </div>
          <img src="../about.jpg" alt="about" />
        </div>
      </section>

      <section
        ref={ref2}
        id="contacts"
        className={isInView2 ? "slider slider--zoom" : "slider"}
      >
        <div>
          <h1>Contactos:</h1>
          <br />
          <p>Horário:</p>
          <p>Segunda-Sexta: 10:00 - 20:00</p>
          <p>Sábados, Domingos e Feriados: Encerrado</p>
          <br />
          <p>Telefone: 915 483 010</p>
          <p>
            Email:{" "}
            <a href="mailto:jsilva.massagem@gmail.com">
              jsilva.massagem@gmail.com
            </a>
          </p>
          <p>
            Social Network:{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/jsilva.massagem/?hl=en"
            >
              <i className={"fa-brands fa-instagram"}></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063787225092"
            >
              <i className={"fa-brands fa-facebook"}></i>
            </a>
          </p>
          <br />
          <p>Morada:</p>
          <p>
            Rua Carlos Paião 9B, Vila Fria
            <br />
            2740-028, Porto Salvo, OEIRAS
          </p>
        </div>
        <iframe
          title="maps"
          width="60%"
          height="350px"
          src="https://maps.google.com/maps?q=R.+Carlos+Paião+9B,+2740-028+Porto+Salvo,+Portugal&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
        ></iframe>
      </section>
    </>
  );
}

export default Hero;
