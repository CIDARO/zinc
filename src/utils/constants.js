const ERC_721_FAUCET_RINKEBY = '0x11FA7f0C8B90bA7137cDaE6261e82e0cAbDE9632';
const ERC_721_FAUCET_ROPSTEN = '0x6B5E013ba22F08ED46d33Fa6d483Fd60e001262e';

const ERC_20_FAUCET_RINKEBY = '0xA5Ac77dE3D32655F1bb6DeCD75b4111282594962';
const ERC_20_FAUCET_ROPSTEN = '0x1E440f032061f236E75a5fF7368dffDFa5Ae7BEa';

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

export const GITHUB_URL = 'https://github.com/cidaro/zinc';
export const CIDARO_URL = 'https://site.cidaro.com/en/';