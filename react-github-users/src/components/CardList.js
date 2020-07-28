import React from 'react';
import Card from './Card';

const CardList = props => (
  <div id='container' className='mt-10'>
    {props.cards.map(card => (
      <Card {...card} key={card.login} />
    ))}
  </div>
);

export default CardList;
