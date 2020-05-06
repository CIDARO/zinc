import React, { useCallback } from 'react';
import Header from './components/Header';
import ERC20Faucet from './components/ERC20Faucet';
import ERC721Faucet from './components/ERC721Faucet';
import Footer from './components/Footer';
import { useWeb3Injected } from '@openzeppelin/network/react';
import erc721faucet from './utils/erc721faucet.json';
import { getERC721FaucetAddress } from './utils/constants';

function App() {

  const web3Context = useWeb3Injected();

  let { accounts, networkName, lib, connected } = web3Context;

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

  const faucet721 = new lib.eth.Contract(erc721faucet, getERC721FaucetAddress(networkName));

  return (
    <div className="App">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 p-4">
        <ERC20Faucet currentNetwork={networkName} connected={connected} account={accounts[0]} web3={lib} />
        <ERC721Faucet currentNetwork={networkName} connected={connected} account={accounts[0]} web3={lib} contract={faucet721} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
