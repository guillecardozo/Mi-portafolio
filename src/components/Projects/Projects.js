import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/actividades.PNG";
import emotion from "../../Assets/Projects/call-center.PNG";
import editor from "../../Assets/Projects/logoBethania.webp";
import chatify from "../../Assets/Projects/react.PNG";
import suicide from "../../Assets/Projects/vivero.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos proyectos reales y académicos que he desarrollado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Broker de Criptomonedas"
              description="Proyecto académico desarrollado con React. La app es un broker de criptomonedas que se conecta con una API ficticia para realizar transacciones de compra y venta, obtener cotizaciones, realizar gráficos. También se aplica IA para saber en qué momento es mejor comprar o vender una moneda específica."
              ghLink="https://github.com/guillecardozo/React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Comunidad Terápeutica Bethania"
              description="Página Web responsive desarrollada con HTML, CSS y Bootstrap para la Comunidad Terápeutica Bethania en Uruguay."
              demoLink="https://ctbethania.uy/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Actividades Culturales"
              description="Proyecto académico desarrollado con C# y MVC. La app tiene una sección de Login y Registro que dependiendo del usuario que ingrese puede ver diferentes secciones, visualizar actividades y realizar compras de las mismas."
              ghLink="https://github.com/guillecardozo/ObligatorioP2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Vivero de Plantas"
              description="Proyecto académico desarrollado con C#, MVC, Entity Framework, SQL Server y LINQ. La app es para empleados de cualquier vivero donde pueden realizar las operaciones CRUD de las plantas, sus tipos y sus respectivas fichas de mantenimiento."
              ghLink="https://github.com/guillecardozo/ObligatorioP3Parte2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Simulador de Call-Center"
              description="Proyecto académico desarrollado con Java. La app tiene una funcionalidad para empleados de un call center y otra para clientes, con un simulador de llamadas."
              ghLink="https://github.com/guillecardozo/ObligatorioDDA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
