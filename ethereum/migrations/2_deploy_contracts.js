const CBACoin = artifacts.require('./CBACoin.sol');

module.exports = function (deployer, network, accounts) {
    return deployer
        .then(() => {
            return deployer.deploy(CBACoin, { gas: 6721975, from: accounts[0] });// 6721975 , {gas: 4500000, from: accounts[0]}
        });
}