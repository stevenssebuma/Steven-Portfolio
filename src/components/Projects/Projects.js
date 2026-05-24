import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/shopping-app.png";
import org from "../../Assets/Projects/selfless-ce.png";
import inv from "../../Assets/Projects/lane-vc.png";
import cy from "../../Assets/Projects/cyberslide.png";
import cb from "../../Assets/Projects/cybershop.png";
import cw from "../../Assets/Projects/cybersweb.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          My project will be here very soon.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title=""
              description=" "
              link="#"
              liveLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={org}
              isBlog={false}
              title=""
              description=""
              link="#"
              liveLink="https://becomeselfless.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inv}
              isBlog={false}
              title=""
              description=""
              link="#"
              liveLink="https://lane-vc-portal.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cw}
              isBlog={false}
              title=""
              description=""
              link="#"
              liveLink="https://cyberstouch.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cy}
              isBlog={false}
              title=""
              description=""
              link="#"
              liveLink="https://cyberstouch-slideshow.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cb}
              isBlog={false}
              title=""
              description=""
              link="#"
              liveLink="https://sveltekit-commerce-five-pearl.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
