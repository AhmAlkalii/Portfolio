import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiPycharm,
  SiMiro
} from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { FaFigma } from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure DevOps">
        <VscAzureDevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pycharm">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Miro">
        <SiMiro />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
