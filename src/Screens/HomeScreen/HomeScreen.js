import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./_homescreen.scss";
import Video from '../../Components/Video/Video'
const HomeScreen = () => {
  return (
    <Container>
      <Row>
        {[...new Array(20)].map(()=>(
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  )
};

export default HomeScreen;
