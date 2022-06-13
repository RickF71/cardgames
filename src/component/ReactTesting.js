import React from 'react';
import ReactDOM  from 'react-dom/client';
import { Button, Container, Col, Row } from 'react-bootstrap';


function ReactTesting(props) {
  
    return (
        <div id="testroot">
            <h1>React Testing Area</h1>
            <Container>
                <Row>
                    <Col className="">Testing Area!!!</Col>
                    <Col>Nothing fun here yet, but there will be!</Col>
                </Row>
            </Container>
        </div>
    );
}

export default ReactTesting;