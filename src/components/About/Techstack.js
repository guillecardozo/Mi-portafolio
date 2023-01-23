import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap

} from "react-icons/di";
import {
  SiCsharp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons"title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
    </Row>
  );
}

export default Techstack;
