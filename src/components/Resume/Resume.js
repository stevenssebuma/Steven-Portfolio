import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import ReactGA from "react-ga";
import pdf from "../../Assets/Steven_Ssebuma_Resume.pdf";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Download button */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button variant="primary" href={pdf} download target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row style={{ justifyContent: "center" }}>
          <iframe
            src={pdf}
            title="Steven Ssebuma Resume"
            width="100%"
            height="800px"
            style={{ border: "none" }}
          ></iframe>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
