import React from 'react';
import '../../assets/styles/components/Search.css';
import '../../assets/styles/components/Card.css';

class Search extends React.Component {

    render() {
        return (
            <div className="card-item">
                <h2 className='main__title'>{this.props.title}</h2>
                <input type='text' className='input' placeholder={this.props.placeholder} />
            </div>
        )
    }
}

export default Search;
