import React from 'react';
import './Cards.css';
import CardItemp from './CardItemp';
import a1 from './img-j1.jfif';
import a2 from './img-j2.jfif';
import a3 from './img-j3.jfif';

function Cardsp() {
  return (
    <div className='cards'>
      <h1>Our Services!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemp
              src={a3}
              text='Explore all the eminities of JMC Arka'
              label='Best Seller'
              path='/products'
            />
            <CardItemp
              src={a2}
              text='Check out the new self sufficient city of Vijayawada'
              label='self-sufficient'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItemp
              src={a3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/products'
            />
            <CardItemp
              src={a1}
              text='Experience the new way of living!'
              label='Adventure'
              path='/products'
            />
            <CardItemp
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

export default Cardsp;