import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <nav className="flex items-center justify-center flex-wrap bg-white p-2">
                <div className="flex items-center flex-shrink-0 text-gray-600">
                    ©2020 CIDARO srl
                </div>
            </nav>
        )
    }
}