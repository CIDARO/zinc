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

  const web3Context = useWeb3Injected();

  let accounts, networkName, lib, connected = null;
  let faucet721 = null;
  let faucet20 = null;
  let faucet20address = null;
  let faucet721address = null;
  if (web3Context) {
    accounts = web3Context.accounts;
    networkName = web3Context.networkName;
    lib = web3Context.lib;
    connected = web3Context.connected;
    faucet721address = getERC721FaucetAddress(networkName);
    faucet20address = getERC20FaucetAddress(networkName);
    faucet721 = new lib.eth.Contract(erc721faucet, faucet721address);
    faucet20 = new lib.eth.Contract(erc20faucet, faucet20address);
  }

  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
      accounts = web3Context.accounts;
    } catch (e) {
      console.error(e);
    }
  };

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
        <ERC721Faucet currentNetwork={networkName} connected={connected} account={accounts ? accounts[0] : ''} web3={lib} contract={faucet721} contractAddress={faucet20address} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
