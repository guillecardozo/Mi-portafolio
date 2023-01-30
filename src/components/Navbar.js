import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import pdf from "../Assets/CV_Guillermo_Cardozo_Desarrollador.pdf";
import Button from "react-bootstrap/Button";
import LocaleContext from "../LocaleContext";
import { useContext } from "react";
import i18n from "../i18";
import en from "../Assets/english.png";
import es from "../Assets/spanish.png"
import { Trans } from "react-i18next";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineDownload,
} from "react-icons/ai";

function NavBar() {
  const { locale } = useContext(LocaleContext);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {i18n.t('navAcercaDeMi')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {i18n.t('navProyectos')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Button
                  variant="primary"
                  href={pdf}
                  download="CV_Guillermo_Cardozo_Desarrollador.pdf"
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;{i18n.t('navDescargar')}
                </Button>
            </Nav.Item>
          
            <Nav.Link 
              href="#" onClick={() => changeLocale('es')}>
              <img className="flag" src={es} alt="English flag" /><Trans> Español</Trans>
            </Nav.Link >
            <Nav.Link href="#" onClick={() => changeLocale('en')}>
              <img className="flag" src={en} alt="Spanish flag" /><Trans> English</Trans>
            </Nav.Link >

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
