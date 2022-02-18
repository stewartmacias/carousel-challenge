import React from 'react';
import '../../assets/styles/components/Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    nextSlide = () => {
        this.setState(({ current }) => ({
            current: current === React.Children.count(this.props.children) - 1 ? 0 : current + 1
        }));
    };

    prevSlide = () => {
        this.setState(({ current }) => ({
            current: current === 0 ? React.Children.count(this.props.children) - 1 : current - 1
        }));
    };

    render() {
        return (
            <section className='carousel'>
                <button type='submit' className='button' onClick={this.prevSlide}>{'<'}</button>
                <button type='submit' className='button' onClick={this.nextSlide}>{'>'}</button>

                <div className='carousel__container'>
                    {this.props.children ? this.props.children[this.state.current] : null}
                </div>
            </section>
        )
    }
}


export default Carousel;
