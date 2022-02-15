import React from 'react';
import '../../assets/styles/components/Search.css';
import '../../assets/styles/components/Card.css';

const Search = ({ title, placeholder }) => (
    <div className="card-item">
        <h2 className='main__title'>{title}</h2>
        <input type='text' className='input' placeholder={placeholder} />
    </div>
);

export default Search;
