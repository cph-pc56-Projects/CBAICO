pragma solidity ^0.4.17;

import './CBACoin.sol';
import '../node_modules/zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';

contract CBACoinCrowdsale is MintedCrowdsale {
    function CBACoinCrowdsale 
    (         
        uint256 _rate,
        address _wallet,
        MintableToken _token
    )
    public Crowdsale(_rate, _wallet, _token){}
    
}