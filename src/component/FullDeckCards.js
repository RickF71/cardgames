import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import SingleCard from './SingleCard';
import { Container } from 'react-bootstrap';

export default function FullDeckCards(props) {
    const fullDeck = [
        {id: 1, title: '2 of clubs', content: '2_of_clubs'},
        {id: 2, title: '3 of clubs', content: '3_of_clubs'}
    ];
    // const [deck, setDeck] = useState('');
    //const [card, setCard] = useState('');

    // const useNewCard = () => {
    //     setCard(<img height={200} src={'./card-graphics/' + newcard + '.png'} />);
    // }
    // const deckToCard1 = () => {
    //     setDeck(<img height={200} src={'./card-graphics/ace_of_hearts.png'} />);
    // }
    // const deckToCard2 = () => {
    //     setDeck(<img height={200} src={'./card-graphics/king_of_diamonds2.png'} />);
    // }
    // const deckToCard3 = () => {
    //     setDeck(<img height={200} src={'./card-graphics/2_of_spades.png'} />);
    // }
    const AllCards = fullDeck.map((card) =>
        {
            <h1>test</h1>
            // <SingleCard cardSingle="{card}" />
        }
    );
    return (
        <div>
            <h1>Cards Title</h1>

            <div>
                <Container>
                    <Row>
                       
                        <Col><AllCards /></Col>
                        
                    </Row>
                </Container>
            </div>
            
        </div>
    );
}

// export default FullDeckCards;