module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4, // Rinkeby official ID number;
      gas: 6000000      
    },
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
