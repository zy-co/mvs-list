import {Col, Container, Row, Button, Dropdown} from "react-bootstrap";

const Intro = () => {
  return (
   <div className="intro">
     <Container className="text-white d-flex justify-content-center align-items-center">
       <Row>
         <Col>
           <h1 className="f-text">Movies</h1>
             <div className="introBtn text-center mt-6">
               <Dropdown>
                 <Dropdown.Toggle variant="light" id="dropdown-basic">Movies list</Dropdown.Toggle>
                   <Dropdown.Menu>
                   <Dropdown.Item href="#upcom">Upcoming</Dropdown.Item>
                   <Dropdown.Item href="#watched">Watched</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </div>
         </Col>
       </Row>
     </Container>
   </div>
    );
};

export default Intro