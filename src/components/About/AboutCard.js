import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, sou <span className="purple">Edmilson Miranda, </span>
            tenho <span className="purple">27 anos</span> e moro em <span className="purple"> Fortaleza-CE.</span>
            <br /> Sou um Desenvolvedor Front-End/WebDesigner
            e estudante na Digital College no curso de Desenvolvedor FullStack.
            <br />
          
            <br />
            <br />
            Alguns dos meus hobbies são 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogando jogos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viagens
            </li>
            <li className="about-activity">
              <ImPointRight /> Festas
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
