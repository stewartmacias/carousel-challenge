import React, { useState } from 'react';
import '../../assets/styles/components/Carousel.css';

const CarouselFunct = ({ children }) => {
    const [current, setCurrent] = useState(0);
    const length = React.Children.count(children);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (

        <section className='carousel'>
            <button type='submit' className='button' onClick={prevSlide} >{'<'}</button>
            <button type='submit' className='button' onClick={nextSlide} >{'>'}</button>
            <div className='carousel__container'>
                {children ? children[current] : null}
            </div>
        </section>
    )
};

export default CarouselFunct;
