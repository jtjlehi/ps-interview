import React, { Component } from 'react';
import { localHost } from './Globals';

class NameComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.name.id,
            firstName: props.name.firstName,
            lastName: props.name.lastName,
            email: props.name.email,
            isFavorite: props.name.isFavorite,
            fillStar: <img src={localHost + 'pictures/fill-star.png'} alt='filled in star'></img>,
            hollowStar: <img src={localHost + 'pictures/hollow-star.png'} alt='hollow start'></img>
        }
    }
    displayFavorite() {
        this.setState((state) => ({
            favoriteDisplay: state.isFavorite ?
                state.fillStar : state.hollowStar
        }))
    }
    toggleFavorite = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            isFavorite: state.isFavorite ? false : true
        }));
        this.displayFavorite();
        this.props.onNameChange(!this.state.isFavorite, this.state.id);
    }
    componentDidMount() {
        this.displayFavorite()
    }
    render() { 
        return (
            <section>
                <span>{this.state.firstName}</span>
                <span>{this.state.lastName}</span>
                <button onClick={this.toggleFavorite}>{this.state.favoriteDisplay}</button>
            </section>
        );
    }
}
 
export default NameComponents;