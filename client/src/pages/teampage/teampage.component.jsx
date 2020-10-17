import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./teampage.styles.css";
import TeamCard from "../../components/team-card/team-card.component";

function TeamPage() {
  return (
    <Container className="team-container">
      <Row>
        <Col>
          <TeamCard
            name="Aamish Ahmad Beg"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
        </Col>
        <Col>
          <TeamCard
            name="Saad Khan"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
        </Col>
        <Col>
          <TeamCard
            name="Saarth Shah"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </Col>
        <Col>
          <TeamCard
            name="Yajat Pathak"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TeamPage;
