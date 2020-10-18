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
            description="Aamish Ahmad Beg, the Team Leader, is an app developer who has worked with technologies like machine learning in the past."
            imageUrl="https://media.discordapp.net/attachments/765558196554825740/767264008583118888/aamish.png?width=458&height=610"
          />
        </Col>
        <Col>
          <TeamCard
            name="Saad Khan"
            description="Saad Khan is an artist who has experience in the field of web and graphic design."
            imageUrl="https://media.discordapp.net/attachments/765558196554825740/767267153892081674/20200831_180615.jpg?width=458&height=610"
          />
        </Col>
        <Col>
          <TeamCard
            name="Saarth Shah"
            description="Saarth Shah is a web developer, graphic designer, game developer, hobbyist programmer, and a video editor. "
            imageUrl="https://media.discordapp.net/attachments/765558196554825740/767267484402843678/WhatsApp_Image_2020-08-15_at_1.40.07_PM.jpeg?width=531&height=610"
          />
        </Col>
        <Col>
          <TeamCard
            name="Yajat Pathak"
            description="Yajat Pathak is full stack web developer with thorough knowledge of cloud development."
            imageUrl="https://media.discordapp.net/attachments/765558196554825740/767266851683041280/IMG-20201018-WA0002.jpg?width=485&height=610"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TeamPage;
