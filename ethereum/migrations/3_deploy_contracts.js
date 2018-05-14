const CBACoinCrowdsale = artifacts.require('./CBACoinCrowdsale.sol');
const CBACoin = artifacts.require('./CBACoin.sol');

module.exports = function (deployer, network, accounts) {    
    const rate = new web3.BigNumber(5000);
    const wallet = accounts[0];

    return deployer
        .then(() => {
            return deployer.deploy(
                CBACoinCrowdsale,               
                rate,
                wallet,
                CBACoin.address,
                { gas: 6700000, from: accounts[0] }
            );
        });
}