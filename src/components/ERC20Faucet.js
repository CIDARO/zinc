import React, { Component } from 'react';
import cogoToast from 'cogo-toast';

export default class ERC20Faucet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            amount: 1
        }
    }

    mintTokens = async () => {
        // Return if the user is not connected
        if (!this.props.connected) {
            cogoToast.error('You are not connected to Metamask.');
            return;
        }
        // Check if the current network is either Rinkeby or Ropsten
        if (this.props.currentNetwork === 'Rinkeby' || this.props.currentNetwork === 'Ropsten') {
            // Return if no address is present
            if (!this.state.address) {
                cogoToast.error('Address missing.');
                return;
            }
            // Return if the amount is non-existant or less than 1
            if (!this.state.amount || this.state.amount < 1) {
                cogoToast.error('Invalid amount (must be greater than 1).');
                return;
            }
            // Since the ERC-20 has 6 decimals, convert the amount
            const amount = this.state.amount * Math.pow(10, 6);
            // Estimate the gas for the transaction
            const gas = await this.props.contract.methods.mint(this.state.address, amount).estimateGas({
                from: this.props.account,
                gasPrice: 9000000000
            });
            // Call the mint method
            await this.props.contract.methods.mint(this.state.address, amount).send({
                from: this.props.account,
                gas,
                gasPrice: 9000000000
            });
        } else {
            cogoToast.error(`Minting not allowed for ${this.props.currentNetwork} network.`);
        }
    }

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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" value={this.state.address} onChange={(event) => this.setState({address: event.target.value})} maxLength={42} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Amount" value={this.state.amount} onChange={(event) => this.setState({amount: event.target.value})} />
                    </div>
                    <div className="flex items-center flex-col justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" onClick={() => this.mintTokens()}>
                            Mint
                        </button>
                        { this.props.currentNetwork !== 'Rinkeby' && this.props.currentNetwork !== 'Ropsten' ? <p className="text-red-500 text-xs italic mt-2">Minting not available for the {this.props.currentNetwork} network.</p> : <p className="text-xs italic mt-2">ERC-20 contract address: {this.props.contractAddress}.</p>}
                    </div>
                </form>
            </div>
        )
    }
}