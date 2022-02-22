import React from 'react';
import '../assets/styles/App.css';
import Categories from '../components/functional/Categories';
import CarouselFunct from '../components/functional/Carousel';
import CardFunct from '../components/functional/Card';
import SearchFunct from '../components/functional/Search';
import ChallengeUseEffect from '../components/functional/ChallengeUseEffect';


const ComponentChallenge = () => {

    return (
        <Categories title='Functional component challenge'>
            <CarouselFunct>
                <ChallengeUseEffect />
                <SearchFunct title='test' placeholder='prueba'/>
                <CardFunct cover='http://dummyimage.com/800x600.png/45807C/ffffff' title='It'/>
                <SearchFunct title='Titulo' placeholder='Prueba'/>
            </CarouselFunct>
        </Categories>
        
        
    );
}

export default ComponentChallenge;