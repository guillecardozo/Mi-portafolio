import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import i18n from "../../i18";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {i18n.t('aboutMeParrafo1')} <span className="purple">Guillermo Cardozo </span>
          {i18n.t('aboutMeSoyDe')} <span className="purple"> Montevideo, Uruguay.</span>
            <br />{i18n.t('aboutMeContinuaParrafo1')}
            <br />
            <br />
            {i18n.t('aboutMeTituloLista')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {i18n.t('aboutMeDeporte')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {i18n.t('aboutMeLeer')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {i18n.t('aboutMeViajar')}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
