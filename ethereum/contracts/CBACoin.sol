pragma solidity ^0.4.17;

import '../node_modules/zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract CBACoin is MintableToken {
    string public name = "Copenhagen Business Academy Coin";
    string public symbol = "CBA";
    uint8 public decimals = 18;
}