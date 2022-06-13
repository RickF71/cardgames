import './App.css';
import { Col, Row, Form, Navbar, 
  Container, Nav, NavDropdown, NavDropdownProps } from "react-bootstrap";

import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import RouteError from './RouteError';
import Redirect from './Redirect';
import ReduxHome from './component/ReduxHome';
import 'bootstrap/dist/css/bootstrap.min.css';

// My Individual testing pages
import MixedDeck from './component/MixedDeck';
import ReactTesting from './component/ReactTesting';
import ArrayOfObjects from './component/ArrayOfObjects';



function App() {
  const myStyle={ 
    backgroundColor: '#121723', 
    height:'100vh',
    color: '#9A7878'
  };
  const containerStyle={
    backgroundColor: '#29290B', 
    width: 'auto',
    height:'60px',
    marginBottom: '10px',
    color: '#9A9A78',
  };
  return (
    <div className="App" style={myStyle}>
      <Router>
          <Container fluid style={containerStyle}>
            <Navbar className="navigation" fixed="top" expand="lg" >
            <Navbar.Brand href="/" style={{color:"white", paddingLeft:"10px"}}>React Testing and Card Game</Navbar.Brand>
            <NavDropdown title="Assignments" id="basic-nav-dropdown" variant="dark">
              <NavDropdown.Item><Link to="/ReactTesting">General React Testing</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/MixedDeck">Mixed Deck Cards</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ArrayOfObjects">Simple Array of Objects</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Navbar>
          </Container>
          
          <Routes>
            <Route path="/" element={<ReduxHome />} />
            <Route path="/ReactTesting" element={<ReactTesting />} />
            <Route path="/MixedDeck" element={<MixedDeck />} />
            <Route path="/ArrayOfObjects" element={<ArrayOfObjects />} />
            <Route path="/githubext" element={() => { 
              window.open("https://github.com/RickF71/react-code");
              // window.location.href = 'https://github.com/RickF71/react-code'; 
              // return null;
              }}/>
            <Route path="*" element={<RouteError />} />
          </Routes>
          {/* <Redirect /> */}
        </Router>
    

    </div>
  );
}

export default App;
