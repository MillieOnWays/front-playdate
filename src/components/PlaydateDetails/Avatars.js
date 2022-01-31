import Avatar from "boring-avatars";
import { Container, Col } from "react-bootstrap";
import { AVATAR_COLORS } from "../../config/constants";
export default function Avatars() {
  return (
    <Container>
      <Col>
        <Avatar
          size={40}
          name="Margaret Brent"
          variant="beam"
          colors={AVATAR_COLORS}
        />

        <Avatar
          size={40}
          name="Mahalia Jackson"
          variant="beam"
          colors={AVATAR_COLORS}
        />
      </Col>
      <Col>
        <Avatar
          size={40}
          name="Harriet Tubman"
          variant="beam"
          colors={AVATAR_COLORS}
        />
        <Avatar
          size={40}
          name="Bessie Coleman"
          variant="beam"
          colors={AVATAR_COLORS}
        />
      </Col>
    </Container>
  );
}
