import React from 'react';
import '../assets/styles/App.css';
import Search from '../components/class/Search';
import Carousel from '../components/class/Carousel';
import Card from '../components/class/Card';
import Categories from '../components/functional/Categories';

class SliderClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: this.props.initialState,
            current: 0,
            length: this.props.initialState.length
        };
    }

    nextSlide = () => {
        this.setState(({ current, length }) => ({
            current: current === length - 1 ? 0 : current + 1
        }));
    };

    prevSlide = () => {
        this.setState(({ current, length }) => ({
            current: current === 0 ? length - 1 : current - 1
        }));
    };

    render() {
        return (
            <div className="App">

                <Categories title='Class component challenge'>
                    <button type='submit' className='button' onClick={this.prevSlide}>{'<'}</button>
                    <button type='submit' className='button' onClick={this.nextSlide}>{'>'}</button>
                    <Carousel>
                        {this.state.initialState.map((item, index) => {
                            return (
                                <div key={index}>
                                    {index === this.state.current && (
                                        item.card ?
                                            <Card key={item.id} {...item} />
                                            : <Search key={item.id} {...item} />
                                    )}
                                </div>

                            )
                        })}
                    </Carousel>
                </Categories>

            </div>
        );
    }
}

export default SliderClass;