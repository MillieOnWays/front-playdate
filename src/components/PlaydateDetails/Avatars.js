import Avatar from "boring-avatars";
import { Container, Col, Row } from "react-bootstrap";
export default function Avatars() {
  return (
    <Container>
      <Col>
        <Avatar
          size={40}
          name="Margaret Brent"
          variant="beam"
          colors={["#FE9D97", "#BDED7E", "#F0AB3D", "#C271B4", "#C20D90"]}
        />

        <Avatar
          size={40}
          name="Mahalia Jackson"
          variant="beam"
          colors={["#F0AB3D", "#FE9D97", "#BDED7E", "#C271B4", "#C20D90"]}
        />
      </Col>
      <Col>
        <Avatar
          size={40}
          name="Harriet Tubman"
          variant="beam"
          colors={["#C271B4", "#BDED7E", "#FE9D97", "#F0AB3D", "#C20D90"]}
        />
        <Avatar
          size={40}
          name="Bessie Coleman"
          variant="beam"
          colors={["#FE9D97", "#C20D90", "#BDED7E", "#F0AB3D", "#C271B4"]}
        />
      </Col>
    </Container>
  );
}
