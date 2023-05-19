import {Container, Row, Col, Card, Image} from "react-bootstrap";
import avatarImg from "../assets/images/watched/avatar-2.jpg";
import jWickImg from "../assets/images/watched/john-wick-4.jpg";
import gotgImg from "../assets/images/watched/gotg-vol3.jpg";

const Watched = () => {
  return (
    <div>
    <Container>
    <br />
    <h1 className="text-white">Watched Movies</h1>
    <br />
      <Row className="gap-3 d-flex justify-content-center">
        <Col md={3} id="watched">
        <Card className="border bg-dark text-white movieImg">
          <Image src={avatarImg} alt="Card image"/>
          <Card.Title className="text-center m-3">Avatar 2</Card.Title>
          <Card.Text className="text-left p-2">same antagonist</Card.Text>
        </Card>
        </Col>
        <Col md={3}>
        <Card className="border bg-dark text-white movieImg">
          <Image src={jWickImg} alt="Card image"/>
          <Card.Title className="text-center m-3">John Wick 4</Card.Title>
          <Card.Text className="text-left p-2">does he's dead(?)</Card.Text>
        </Card>
        </Col>
        <Col md={3}>
        <Card className="border bg-dark text-white movieImg">
          <Image src={gotgImg} alt="Card image"/>
          <Card.Title className="text-center m-3">GOTG VOL. 3</Card.Title>
          <Card.Text className="text-left p-2">Rocket😓😭</Card.Text>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>
    );
};

export default Watched;