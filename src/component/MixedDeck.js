import React from 'react';
// import ReactDOM  from 'react-dom/client';
// import { Button, Container, Col, Row } from 'react-bootstrap';
import {  Container, Col, Row } from 'react-bootstrap';
import { fullDecks } from './DeckOfCards';

// var fullDeck = [
//     {key:'1',sn:'2c',fn:'2_of_clubs'},
//     {key:'2',sn:'3c',fn:'3_of_clubs'},
//     {key:'3',sn:'4c',fn:'4_of_clubs'},
// ];
    
//     '5_of_clubs',
//     '6_of_clubs',
//     '7_of_clubs',
//     '8_of_clubs',
//     '9_of_clubs',
//     '10_of_clubs',
//     'jack_of_clubs2',
//     'queen_of_clubs2',
//     'king_of_clubs2',
//     'ace_of_clubs', 
//     '2_of_hearts',
//     '3_of_hearts',
//     '4_of_hearts',
//     '5_of_hearts',
//     '6_of_hearts',
//     '7_of_hearts',
//     '8_of_hearts',
//     '9_of_hearts',
//     '10_of_hearts',
//     'jack_of_hearts2',
//     'queen_of_hearts2',
//     'king_of_hearts2',
//     'ace_of_hearts',
//     '2_of_spades',
//     '3_of_spades',
//     '4_of_spades',
//     '5_of_spades',
//     '6_of_spades',
//     '7_of_spades',
//     '8_of_spades',
//     '9_of_clubs',
//     '10_of_spades', 
//     'jack_of_spades2',
//     'queen_of_spades2',
//     'king_of_spades2',
//     'ace_of_spades',
//     '2_of_diamonds',
//     '3_of_diamonds',
//     '4_of_diamonds',
//     '5_of_diamonds',
//     '6_of_diamonds',
//     '7_of_diamonds',
//     '8_of_diamonds',
//     '9_of_diamonds',
//     '10_of_diamonds',
//     'jack_of_diamonds2',
//     'queen_of_diamonds2',
//     'king_of_diamonds2',
//     'ace_of_diamonds',
// ]
// console.log ('<h1>fullDeck</h1>');
// console.log (fullDeck);


function MixedDeck(props) {
    const fullDeck = fullDecks.sort((key, sn, fn) => Math.random()-0.5)
    // const fullDeck = fullDecks.map((sn, fn) => (
    //     <div> test  </div>
    // ));
    const randomizedDeck = fullDeck.map((sn, fn, index) => (
        <Col className="bg-primary p-1 m-1">
            <div style={{ color: "black" }}>{index} </div>
            <img height={100} src={'./card-graphics/' + fn + '.png'} />
        </Col>
    ));  
    const randomCard = 
        <img height={100} src={'./card-graphics/jack_of_hearts.png'} />
    //     // <div>(fullDeck[{random: 1 + (Math.random() * (52 - this.min))}]</div>
    
    console.log(fullDeck);
    console.log(randomizedDeck[4])
    return (
        <div id="testroot">
            <h1>React Testing Area</h1>
            <Container>
                <Row>
                    <Col><h3>Very simple array of mixed deck of cards.</h3></Col>
                </Row>
                <Row>
                    <Col>
                        It is a simple array of filenames that correspond to the
                        names of files of each of the individual graphic files for
                        each card.
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-secondary" style={{ color: "black" }}>
                        <h3>Random Card:</h3>
                        <div>{randomCard} </div>
                        <img height={150} src={randomCard} />
                    </Col>
                </Row>
                <Row xs="auto" className="">
                    {randomizedDeck}
                </Row>
            </Container>
        </div>
    );
}
// const testroot = ReactDOM.createRoot(document.getElementById('testroot'));

// testroot.render(fullDeck);

export default MixedDeck;