import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a tod@s, me llamo <span className="purple">Guillermo Cardozo </span>
            y soy de <span className="purple"> Montevideo, Uruguay.</span>
            <br />Soy Programador Web y estudiante de Analista en Tecnologías de la Información en la Universidad ORT.
            <br />
            <br />
            Además de programar, me gusta:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hacer deportes
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
