pragma solidity >0.5.0;

/* Description:
*  This smart contract is used for the functioning of the ERC-20 faucet made by Cidaro srl reachable at https://zinc.cidaro.com/
*  This smart contract is built on:
   - OpenZeppelin Github library
*  The faucet is currently running on Rinkeby and Ropsten
*  Visit our website https://site.cidaro.com/ and our Github repositories https://github.com/CIDARO-srl
*/

//Import
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";

/**
* Modified extension of {ERC20} that adds the minting function
*/
contract ERC20Mintable is ERC20 {

    /**
     * MinterRole (onlyMinter ) elimintaed to allow everyone to create new tokens
     * the caller must not have the {MinterRole}.
     */
    function mint(address account, uint256 amount) public  returns (bool) {
        _mint(account, amount);
        return true;
    }
}

pragma solidity >0.5.0;

//Import
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20Detailed.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20Pausable.sol";

contract ERC20Faucet is ERC20, ERC20Detailed , ERC20Pausable , ERC20Mintable {

    // Constructor
    constructor(uint256 initialSupply) ERC20Detailed("CDRCoin", "CDRC", 6) public {
        _mint(msg.sender, initialSupply);
    }

    /* "mint" function to create (mint) new ERC20 tokens
    *   The mint function has 2 inputs; an address for the tokens receiver and the amount of tokens to create (mint)
    */

    function mint(address account, uint256 amount) public whenNotPaused returns (bool) {
        return super.mint(account, amount);
    }
}
