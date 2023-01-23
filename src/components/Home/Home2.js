import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import i18n from "../../i18";
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
            {i18n.t('home2DejameContarte')} <span className="purple"> {i18n.t('home2Quien')} </span> {i18n.t('home2Soy')}
            </h1>
            <p className="home-about-body">
            {i18n.t('home2Parrafo1')}
              
              <br />
              <br />{i18n.t('home2Parrafo2')}
              <i>
                <b className="purple"> {i18n.t('home2Lenguajes')} </b>
              </i>
              <br />
              <br />
              {i18n.t('home2Parrafo3')}&nbsp;
              <i>
                <b className="purple">{i18n.t('home2ActitudPostiva')} </b>{i18n.t('home2ContinuaParrafo3')}
                <b className="purple">
                {i18n.t('home2NuevasTecnologias')}
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
            <h1>{i18n.t('home2Redes')}</h1>
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
            <a href="mailto:guille.cardozo94@gmail.com">{i18n.t('home2MailTo')}</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
