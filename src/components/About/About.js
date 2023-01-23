import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import i18n from "../../i18";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">{i18n.t('aboutMeQuienSoy')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        {i18n.t('aboutMeHabilidades')} <strong className="purple">{i18n.t('aboutMeProfesionales')} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{i18n.t('aboutMeHerramientas')}</strong> {i18n.t('aboutMeQueUso')}
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
