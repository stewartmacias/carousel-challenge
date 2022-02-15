import React from 'react';
import '../assets/styles/App.css';
import Search from '../components/class/Search';
import Carousel from '../components/class/Carousel';
import Card from '../components/class/Card';
import Categories from '../components/functional/Categories';
import CarouselFunct from '../components/functional/Carousel';
import CardFunct from '../components/functional/Card';
import SearchFunct from '../components/functional/Search';

class App extends React.Component {

    render() {
        return (
            <div className="App">

                <Categories title='Class component challenge'>

                    <Carousel>
                        {this.props.initialState.map(item => (
                            item.card ?
                                <Card key={item.id} {...item} />
                                : <Search key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>

                <Categories title='Functional component challenge'>
                    <CarouselFunct>
                        {this.props.initialState.map(item => (
                            item.card ?
                                <CardFunct key={item.id} {...item} />
                                : <SearchFunct key={item.id} {...item} />

                        ))}
                    </CarouselFunct>
                </Categories>

            </div>
        );
    }
}

export default App;
