import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './containers/App';

const initialState = [
      {
        'id': 2,
        'title': '¿Qué quieres ver hoy?',
        'placeholder': 'Buscar...',
        'card':false
      },
      {
        'id': 3,
        'title': 'Instinct',
        'year': 2002,
        'contentRating': '16+',
        'duration': 137,
        'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
        'card':true
      },
      {
        'id': 4,
        'title': 'Grand Hotel',
        'year': 2014,
        'contentRating': '16+',
        'duration': 163,
        'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
        'card': true
      },
      {
        'id': 5,
        'title': 'Stargate Atlantis',
        'year': 2014,
        'contentRating': '16+',
        'duration': 194,
        'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
        'card': true
      },
      {
        'id': 14,
        'title': 'Consulta aquí',
        'placeholder': 'Escribe aquí...',
        'card':false
      },
      {
        'id': 6,
        'title': 'Final Space',
        'year': 2017,
        'contentRating': '16+',
        'duration': 124,
        'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
        'card': true
      },
      {
        'id': 7,
        'title': 'The InBetween',
        'year': 2011,
        'contentRating': '16+',
        'duration': 179,
        'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
        'card': true
      },
      {
        'id': 8,
        'title': 'Stargate Atlantis',
        'year': 2012,
        'contentRating': '16+',
        'duration': 148,
        'cover': 'http://dummyimage.com/800x600.png/306880/ffffff',
        'card' : true,
      },
      {
        'id': 9,
        'title': 'Alien Highway',
        'year': 2019,
        'contentRating': '16+',
        'duration': 128,
        'cover': 'http://dummyimage.com/800x600.png/604180/ffffff',
        'card' : true,
      },
      {
        'id': 10,
        'title': 'Elementary',
        'year': 2011,
        'contentRating': '16+',
        'duration': 346,
        'cover': 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
        'card' : true,
      },
      {
        'id': 11,
        'title': 'Strange Angel',
        'year': 2015,
        'contentRating': '16+',
        'duration': 226,
        'cover': 'http://dummyimage.com/800x600.png/45807C/ffffff',
        'card' : true,
      },
      {
        'id': 12,
        'title': 'Private Eyes',
        'year': 2018,
        'contentRating': '16+',
        'duration': 190,
        'cover': 'http://dummyimage.com/800x600.png/577380/ffffff',
        'card' : true,
      },
      {
        'id': 13,
        'title': 'NCIS: Los Angeles',
        'year': 2010,
        'contentRating': '16+',
        'duration': 160,
        'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
        'card' : true,
      },
    ];

ReactDOM.render(
  <React.StrictMode>
    <App initialState={initialState}/>
  </React.StrictMode>,
  document.getElementById('root')
);
