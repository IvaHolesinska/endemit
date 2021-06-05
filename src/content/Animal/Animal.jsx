import React from 'react';
import './style.css';
import africanElephant from './Gallery/Africa/africanElephant.svg';
import panda from './Gallery/Asia/panda.svg';
import kangaroo from './Gallery/Australia/kangaroo.svg';
import europeanBeaver from './Gallery/Europe/europeanBeaver.svg';

export const animals = [
  {
    img: africanElephant,
    name: 'slon africký',
    area: 'AF',
    text: 'Na rozdíl od svého indického příbuzného mám mnohem větší uši. Žijeme ve skupině, kterou vede nejzkušenejší slonice',
    level: '1',
  },
  {
    img: panda,
    name: 'panda velká',
    area: 'AS',
    text: 'Moje zbarvení je nápadně černobílé a živím se převážně bambusovými výhonky',
    level: '1',
  },
  {
    img: kangaroo,
    name: 'klokan velký',
    area: 'OC',
    text: 'Můj ocas je tak silný, že mi slouží jako opora těla.',
    level: '1',
  },
  {
    img: europeanBeaver,
    name: 'bobr evropský',
    area: 'EU',
    text: 'Pomocí svých mohutných zubů buduji na řekách hráze.',
    level: '1',
  },
];

const drag = (ev) => {
  console.log(ev.target);
};

export const Animal = ({ img, name }) => {
  return (
    <>
      <div className="animal--gallery">
        <img
          className="animal--img"
          src={img}
          draggable={true}
          onDragStart={(event) => drag(event)}
        />
        <p className="animal--name">{name}</p>
      </div>
    </>
  );
};