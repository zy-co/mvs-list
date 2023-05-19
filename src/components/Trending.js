import {Container, Row, Col, Card, Image} from "react-bootstrap";
import duneImg from "../assets/images/upcoming/dune-part-2.jpg";
import flashImg from "../assets/images/upcoming/the-flash.jpg";
import oppenheimerImg from "../assets/images/upcoming/oppenheimer.jpg";

const Upcoming = () => {
  return (
    <div>
    <Container>
    <br />
    <h1 className="text-white">Upcoming Movies</h1>
    <br />
      <Row className="gap-3 d-flex justify-content-center">
        <Col md={3} id="upcom">
        <Card className="border bg-dark text-white movieImg">
          <Image src={duneImg} alt="Card image"/>
          <Card.Title className="text-center m-3">Dune: Part 2</Card.Title>
          <Card.Text className="text-left p-2">idk yet</Card.Text>
        </Card>
        </Col>
        <Col md={3}>
        <Card className="border bg-dark text-white movieImg">
          <Image src={flashImg} alt="Card image"/>
          <Card.Title className="text-center m-3">The Flash</Card.Title>
          <Card.Text className="text-left p-2">Flashpoint go brrrr</Card.Text>
        </Card>
        </Col>
        <Col md={3}>
        <Card className="border bg-dark text-white movieImg">
          <Image src={oppenheimerImg} alt="Card image"/>
          <Card.Title className="text-center m-3">Oppenheimer</Card.Title>
          <Card.Text className="text-left p-2">A nuclear maker</Card.Text>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>
    );
};

export default Upcoming;