import logo from './logo.svg';
import './App.css';
import FullDeckCards from './components/FullDeckCards';
import ReactTesting from './components/ReactTesting';
//import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Col>
          <Row><ReactTesting /></Row>
        </Col>
        {/* <Col>
          <Row><FullDeckCards /></Row>
        </Col> */}
        <br /><br />

       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
