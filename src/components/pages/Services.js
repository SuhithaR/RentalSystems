import React from 'react';
import '../../App.css';
import './Cards.css';
import CardItemp from './CardItemp';
import a1 from './simg-1.jfif';
import a2 from './simg-2.jfif';

export default function Services() {

  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemp
              src={a1}
              text='Direct contact with the owner of the property'
              label='customer service'
            />
           <CardItemp
              src={a2}
              text='Best deals!!'
              label='customer service'
              
            />
          </ul>
          
      </div>
      </div>
    </div>
  );
}