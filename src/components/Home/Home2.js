import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME CONTARTE <span className="purple"> QUIEN </span> SOY
            </h1>
            <p className="home-about-body">
              Soy Programador Web y estudiante avanzado de la carrera
              Analista en Tecnologías de la Información.
              
              <br />
              <br />He aprendido a desarrollar en distintos lenguajes de progmración como
              <i>
                <b className="purple"> C#, Javascript y Java. </b>
              </i>
              <br />
              <br />
              Trabajador detallista y resolutivo, buen colaborador que
              prefiere el trabajo en equipo y de aprendizaje rápido.
              Aporto una&nbsp;
              <i>
                <b className="purple">actitud positiva </b> y la voluntad y motivación para
              aprender{" "}
                <b className="purple">
                nuevas tecnologías.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME PUEDES ENCONTRAR EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/guillecardozo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/guillermocardozo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <br></br>
            <a href="mailto:guille.cardozo94@gmail.com">Contactame por mail a guille.cardozo94@gmail.com</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
