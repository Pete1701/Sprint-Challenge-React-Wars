import React from 'react';

const CharCard = props => {
    return (
      <div>
        <h3>{props.name}</h3>
        <p>{props.birth_year}</p>
      </div>
    );
};

export default CharCard;