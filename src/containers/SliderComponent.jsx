import React, { useState } from 'react';
import '../assets/styles/App.css';
import Categories from '../components/functional/Categories';
import CarouselFunct from '../components/functional/Carousel';
import CardFunct from '../components/functional/Card';
import SearchFunct from '../components/functional/Search';


const SliderComponent = ({ initialState }) => {


    const [current, setCurrent] = useState(0);
    const length = initialState.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (

        <Categories title='Functional component challenge'>

            <button type='submit' className='button' onClick={prevSlide} >{'<'}</button>
            <button type='submit' className='button' onClick={nextSlide} >{'>'}</button>

            <CarouselFunct>
                {initialState.map((item, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                item.card ?
                                    <CardFunct key={item.id} {...item} />
                                    : <SearchFunct key={item.id} {...item} />
                            )}
                        </div>

                    )
                })}
            </CarouselFunct>
        </Categories>
    );
}

export default SliderComponent;