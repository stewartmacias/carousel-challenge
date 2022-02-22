import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/components/Card.css';

const CardFunct = ({ cover, title, year, contentRating, duration }) => (
  <div className="card-item">
  <img className="card-item__img" src={cover} alt={title} />
  <div className="card-item__details">
    <div>
    </div>
    <p className="card-item__details--title">{title}</p>
    <p className="card-item__details--subtitle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
</div>
);

CardFunct.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string,
    year: PropTypes.string,
    contentRating: PropTypes.string,
    duration: PropTypes.string,
  };
CardFunct.defaultProps = {
    title: '',
    year: '',
    contentRating: '',
    duration: '',
}

export default CardFunct;