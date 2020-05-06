import React, { Component } from 'react';
import logoSvg from '../assets/zinc.svg';

export default class Header extends Component {
    render() {
        return(
            <nav className="flex items-center justify-center flex-wrap bg-white p-2">
                <div className="flex items-center flex-shrink-0 text-white">
                    <img src={logoSvg} width={96} height={96} alt="" />
                </div>
            </nav>
        )
    }
}