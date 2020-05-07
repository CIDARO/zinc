import React, { useCallback } from 'react';
import Disclaimer from './components/Disclaimer';
import Header from './components/Header';
import ERC20Faucet from './components/ERC20Faucet';
import ERC721Faucet from './components/ERC721Faucet';
import Footer from './components/Footer';
import { useWeb3Injected } from '@openzeppelin/network/react';
import erc721faucet from './utils/erc721faucet.json';
import erc20faucet from './utils/erc20faucet.json';
import { getERC721FaucetAddress, getERC20FaucetAddress } from './utils/constants';

function App() {
  // Use web3 injected from browser
  const web3Context = useWeb3Injected();
  // Initialize null variable
  let accounts, networkName, lib, connected, faucet721, faucet20, faucet721address, faucet20address = null;
  // If the web3 context is available, initialize variables
  if (web3Context) {
    // Retrieve accounts, network name, lib (web3) and if it's connected or not
    accounts = web3Context.accounts;
    networkName = web3Context.networkName;
    lib = web3Context.lib;
    connected = web3Context.connected;
    // Get the faucets addresses from the network name
    faucet721address = getERC721FaucetAddress(networkName);
    faucet20address = getERC20FaucetAddress(networkName);
    // Initialize the contracts
    faucet721 = new lib.eth.Contract(erc721faucet, faucet721address);
    faucet20 = new lib.eth.Contract(erc20faucet, faucet20address);
  }
  // Request authorization to use this app
  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
      accounts = web3Context.accounts;
    } catch (e) {
      console.error(e);
    }
  };
  // Use callback for React Hook
  const requestAccess = useCallback(() => requestAuth(web3Context), []);
  requestAccess();

  return (
    <div className="App">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4 p-4">
        <Disclaimer connected={connected} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 p-4">
        <ERC20Faucet currentNetwork={networkName} connected={connected} account={accounts ? accounts[0] : ''} web3={lib} contract={faucet20} contractAddress={faucet20address} />
        <ERC721Faucet currentNetwork={networkName} connected={connected} account={accounts ? accounts[0] : ''} web3={lib} contract={faucet721} contractAddress={faucet721address} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
