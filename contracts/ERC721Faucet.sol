pragma solidity >0.5.0;

/* Description:
*  This smart contract is used for the functioning of the ERC-721 faucet made by CIDARO srl reachable at https://zinc.cidaro.com
*  This smart contract is build on:
  - Clone-factory repositories
  - OpenZeppelin Github library
*  The faucet is currently running on Rinkeby and Ropsten
*  Visit our website https://site.cidaro.com/en/ and our Github repositories https://github.com/CIDARO-srl
*/

// Imports
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

contract ERC721Faucet is ERC721  {

    // Counters method imported from "OpenZeppelin utils"
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Constructor
    constructor(string memory tokenName, string memory tokenSymbol) ERC721(tokenName, tokenSymbol) public {

    }

    /* "mint" function to create (mint) new 721 tokens
    *  The mint function has 2 inputs; an address for the tokens receiver and the amount of tokens to create (mint)
    *  We recommend not generating as many tokens together for gas reasons (MAX 50 per time)
    *  Each new token has its unique tokenId
    */
    function mint(address receiver, uint totalSupply) public returns (bool) {
        for(uint256 i = 1; i<= totalSupply; i++){
            _tokenIds.increment();
            uint256 new721Id = _tokenIds.current();
            _mint(receiver, new721Id);
        }
    }

}
