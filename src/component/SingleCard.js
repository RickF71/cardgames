import React from 'react';
//import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default function SingleCard({cardSingle}) {
    return (
        <div>
            <h1>1{<img height={200} src='./card-graphics/{cardSingle}.png' />}</h1>
        </div>
    );
}
