import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import home from "../../Assets/Projects/movies.png";
import tp from "../../Assets/Projects/tp.png";
import ep from "../../Assets/Projects/ep.png";
import ec from "../../Assets/Projects/ec.png";
import sep from "../../Assets/Projects/simend.png";
import fc from "../../Assets/Projects/FC1.jpg";
import home1 from "../../Assets/Projects/Home.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="Movie Booking System"
              description="A web application allowing users to browse movies, book tickets, and manage their bookings securely. Implemented authentication, caching mechanisms, optimized database queries, and loop structures to enhance system efficiency and reduce booking delays."
              ghLink="https://github.com/AhmAlkalii/MovieBookingSystem"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tp}
              isBlog={false}
              title="Public Transportation Scheduling System (PTSS)"
              description="A transport management web app enabling users to search routes, book trips, and manage bookings. Designed system workflows using BPMN, UML, DFDs, and ERDs. Conducted business modeling, process mapping, and use case analysis to optimize route planning and ticketing. Defined system requirements and developed an ERD for database integration."
              ghLink="https://github.com/AhmAlkalii/Transport-Management-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec}
              isBlog={false}
              title="E-Commerce Platform"
              description="A restaurant ordering system where customers can place and track orders in real-time. Designed an admin dashboard for efficient order management and analytics. Integrated optimized loops, caching strategies, and streamlined backend logic to improve order processing reliability."
              ghLink="https://github.com/AhmAlkalii/EcomBackendAPI"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home1}
              isBlog={false}
              title="Car Rental Platform"
              description="A web-based car rental platform enabling users to book, manage, and track rental reservations. Developed secure authentication and reservation tracking while optimizing API calls, database queries, caching mechanisms, and CORS handling to improve response times and system performance."
              ghLink= "https://github.com/AhmAlkalii/CarRental-WebApp"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sep}
              isBlog={false}
              title="Virus Spread Simulation Using Cellular Automata"
              description="A Python-based simulation modeling virus transmission dynamics using **Cellular Automata (CA)**. The project visualizes infection spread using **heatmaps, bar charts, and epidemiological curves**, leveraging **COVID-19 data from Kaggle**. Implemented **Moore Neighborhood logic** for realistic interactions and utilized (NumPy, Pandas, Matplotlib, and Plotly) for analysis."
              ghLink="https://github.com/AhmAlkalii/Modeling-viruses-by-cellular-automata"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ep}
              isBlog={false}
              title="Personal Expense Tracker"
              description="Developed personal expense tracker system that aims to help users manage their finances by tracking income and expenses."
              ghLink="https://github.com/AhmAlkalii/PersonalExpenseTracker"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fc}
              isBlog={false}
              title="Face Recognition"
              description="Created a system for automated attendance tracking using facial recognition."
              ghLink="https://github.com/AhmAlkalii/FacialRecognitionAttendanceSystemUsingPython"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
