import React, { Component } from 'react';

export default class Disclaimer extends Component {
    render() {
        return (
            <div className="w-full max-w-md md:max-w-4xl mr-0 md:mr-4">
                <div className="bg-white shadow-md text-center rounded px-8 pt-6 pb-8 mb-4">
                    <p><span className="font-semibold">Zinc</span> is an Open Source ERC-20 + ERC-721 faucet for Rinkeby and Ropsten Testnets. You cannot mint tokens for the Ethereum Mainnet and you must have your wallet ready (via Metamask et similia).</p>
                    <p>You are currently {this.props.connected ? <span className="text-green-500">connected</span> : <span className="text-red-500">not connected</span>}.</p>
                </div>
            </div>
        )
    }
}