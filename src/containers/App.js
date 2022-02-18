import React from 'react';
import '../assets/styles/App.css';
import ClassChallenge from './ClassChallenge';
import ComponentChallenge from './ComponentChallenge';
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <ClassChallenge />
                <ComponentChallenge />
            </div>
        );
    }
}

export default App;
