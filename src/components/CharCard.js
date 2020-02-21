import React from 'react';
import './CharCard.css';
import { Card, CardText, CardTitle } from "reactstrap";

const CharCard = props => {
    return (
      <Card className='card'>
        <CardTitle className='name'>Name: {props.name}</CardTitle>
        <CardText className='text'>Year: {props.birth_year}</CardText>
      </Card>
    );
};

export default CharCard;