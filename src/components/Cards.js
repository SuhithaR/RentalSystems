import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import a1 from './img-j1.jfif';
import a2 from './img-j2.jfif';
import a3 from './img-j3.jfif';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Elegant options!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={a3}
              text='Explore all the eminities of JMC Arka'
              label='Best Seller'
              path='/products'
            />
            <CardItem
              src={a2}
              text='Check out the new self sufficient city of Vijayawada'
              label='self-sufficient'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={a3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src={a1}
              text='Experience the new way of living!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={a2}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;