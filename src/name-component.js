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
    componentDidMount() {
        this.displayFavorite()
    }
    render() { 
        return (
            <section>
                <span>{this.state.firstName}</span>
                <span>{this.state.lastName}</span>
                <span>{this.state.favoriteDisplay}</span>
            </section>
        );
    }
}
 
export default NameComponents;