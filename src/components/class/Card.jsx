import React from 'react';
import '../../assets/styles/components/Card.css';

class Card extends React.Component {

    render() {
        let { cover, title, year, contentRating, duration } = this.props; 
        return (
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
        )
    }
}

Card.defaultProps = {
    cover: 'http://dummyimage.com/800x600.png/577380/ffffff',
    title: '',
    year: '',
    contentRating: '',
    duration: '',
}


export default Card;
