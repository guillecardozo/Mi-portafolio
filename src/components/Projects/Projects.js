import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/actividades.PNG";
import emotion from "../../Assets/Projects/call-center.PNG";
import editor from "../../Assets/Projects/logoBethania.webp";
import chatify from "../../Assets/Projects/react.PNG";
import suicide from "../../Assets/Projects/vivero.PNG";
import i18n from "../../i18";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        {i18n.t('proyectosTitulo')} <strong className="purple">{i18n.t('proyectosTitulo2')} </strong>
        </h1>
        <p style={{ color: "white" }}>
        {i18n.t('proyectosSubtitulo')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title= {i18n.t('proyectoBrokerTitulo')}
              description={i18n.t('proyectoBrokerContent')}
              ghLink="https://github.com/guillecardozo/React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title={i18n.t('proyectoBethaniaTitulo')}
              description={i18n.t('proyectoBethaniaContent')}
              ghLink="https://ctbethania.uy/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={i18n.t('proyectoActividadesTitulo')}
              description= {i18n.t('proyectoActividadesContent')}
              ghLink="https://github.com/guillecardozo/ObligatorioP2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={i18n.t('proyectoViveroTitulo')}
              description={i18n.t('proyectoViveroContent')}
              ghLink="https://github.com/guillecardozo/ObligatorioP3Parte2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={i18n.t('proyectoSimuladorTitulo')}
              description={i18n.t('proyectoSimuladorContent')}
              ghLink="https://github.com/guillecardozo/ObligatorioDDA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
