import React from 'react';
import '../../assets/styles/components/Card.css';

class Card extends React.Component {

    render() {
        return (
            <div className="card-item">
                <img className="card-item__img" src={this.props.cover} alt={this.props.title} />
                <div className="card-item__details">
                    <div>
                    </div>
                    <p className="card-item__details--title">{this.props.title}</p>
                    <p className="card-item__details--subtitle">
                        {`${this.props.year} ${this.props.contentRating} ${this.props.duration}`}
                    </p>
                </div>
            </div>
        )
    }
}



export default Card;
