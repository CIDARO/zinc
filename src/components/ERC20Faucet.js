import React, { Component } from 'react';

export default class ERC20Faucet extends Component {
    render() {
        return (
            <div className="w-full max-w-md mr-0 md:mr-4">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 text-center">
                        <span className="text-gray-700 text-xl font-bold mb-2">
                            Mint ERC-20
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="address">
                            Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" maxLength={42} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="address">
                            Amount
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Amount" />
                    </div>
                    <div className="flex items-center flex-col justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                            Mint
                        </button>
                        { this.props.currentNetwork !== 'Rinkeby' && this.props.currentNetwork !== 'Ropsten' ? <p className="text-red-500 text-xs italic mt-2">Minting not available for the {this.props.currentNetwork} network.</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}