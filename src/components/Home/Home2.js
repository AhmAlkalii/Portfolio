import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into programming started with curiosity and grew into a passion for solving problems with code.
              Over time, I've explored various technologies and gained hands-on experience in building functional and efficient solutions.
              <br />
              <br />I have strong proficiency in:
              <i>
                <b className="purple"> C++, C#, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              I'm particularly interested in developing &nbsp;
              <i>
                <b className="purple">Web Applications and Scalable Software Solutions</b>
              </i>, 
               as well as exploring the potential of &nbsp;
              <i>
              <b className="purple">Artificial Intelligence </b>
              </i> 
              to create innovative products.
              <br />
              <br />
              Whenever I get the opportunity, I enjoy applying my skills in 
              <b className="purple"> Node.js</b> along with 
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks</b>
              </i> 
              &nbsp; like 
              <i>
                <b className="purple"> React.js and Angular</b>
              </i>
              &nbsp; to build dynamic and interactive user experiences.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AhmAlkalii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-mohammed-alkali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
