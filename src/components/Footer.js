import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <nav className="flex items-center justify-center flex-wrap bg-white p-2">
                <div className="flex flex-col items-center flex-shrink-0">
                    <div className="my-4">
                        <a href="https://github.com/CIDARO-srl/zinc" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 hover:bg-gray-700 font-bold py-2 px-4 rounded inline-flex items-center mr-1 cursor-pointer">
                            <span>Github</span>
                        </a>
                        <a href="https://site.cidaro.com/en/" target="_blank" ref="noopener noreferrer" className="text-white bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded inline-flex items-center ml-1 cursor-pointer">
                            <span>CIDARO</span>
                        </a>
                    </div>
                    <div className="text-md text-gray-600">©2020 CIDARO srl</div>
                </div>
            </nav>
        )
    }
}