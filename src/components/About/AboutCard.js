import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed Mohammed </span> 
            from <span className="purple">Nigeria.</span>
            <br />
            I am currently pursuing a Bachelor's degree in Information Technology (IT),
            and I am expected to graduate in <span className="purple">2025.</span>
            <br />
            I am passionate about technology, problem-solving, and building impactful software solutions.
            <br />
            <br />
            When I’m not coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels & Non-Fiction Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and Playing Football
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
