import React from 'react';
import '../assets/styles/App.css';
import Search from '../components/class/Search';
import Carousel from '../components/class/Carousel';
import Card from '../components/class/Card';
import Categories from '../components/functional/Categories';

class ClassChallenge extends React.Component {

    render() {
        return (
                <Categories title='Class component challenge'>
                    <Carousel>
                        <Search title='test' placeholder='prueba' />
                        <Card cover='http://dummyimage.com/800x600.png/45807C/ffffff' title='It' />
                        <Search title='Titulo' placeholder='Prueba' />
                    </Carousel>
                </Categories>
        );
    }
}

export default ClassChallenge;
