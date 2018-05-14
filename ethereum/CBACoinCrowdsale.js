import web3 from './web3';
import CBACoinCrowdsale from './build/contracts/CBACoinCrowdsale.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(CBACoinCrowdsale.interface),
        address
    )
};