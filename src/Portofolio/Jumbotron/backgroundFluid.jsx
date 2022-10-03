import React, { Component } from 'react';
import Logo from './images/background.jpg';

export default class BackgroundFluid extends Component {
    render() {
        return (
            <div>
                <img src={Logo} class='img-fluid' alt=""/>
            </div>
        );
    }
}
