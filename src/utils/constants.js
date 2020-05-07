const ERC_721_FAUCET_RINKEBY = '0x11FA7f0C8B90bA7137cDaE6261e82e0cAbDE9632';
const ERC_721_FAUCET_ROPSTEN = '';

const ERC_20_FAUCET_RINKEBY = '';
const ERC_20_FAUCET_ROPSTEN = '';

export const getERC721FaucetAddress = (network) => {
    switch (network) {
        case 'Rinkeby':
            return ERC_721_FAUCET_RINKEBY;
        case 'Ropsten':
            return ERC_721_FAUCET_ROPSTEN;
        default:
            return null;
    }
}

export const getERC20FaucetAddress = (network) => {
    switch (network) {
        case 'Rinkeby':
            return ERC_20_FAUCET_RINKEBY;
        case 'Ropsten':
            return ERC_20_FAUCET_ROPSTEN;
        default:
            return null;
    }
}