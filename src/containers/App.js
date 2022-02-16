import React from 'react';
import '../assets/styles/App.css';
import SliderClass from './SliderClass';
import SliderComponent from './SliderComponent';
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <SliderClass initialState={this.props.initialState} />
                <SliderComponent initialState={this.props.initialState} />
            </div>
        );
    }
}

export default App;
