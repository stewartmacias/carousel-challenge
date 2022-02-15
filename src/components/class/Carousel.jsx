import React from 'react';
import '../../assets/styles/components/Carousel.css';

class Carousel extends React.Component{
 
    render(){
        return (
            <section className='carousel'>
            <div className='carousel__container'>
              {this.props.children}
            </div>
          </section>
        )
    }
}
 

export default Carousel;
