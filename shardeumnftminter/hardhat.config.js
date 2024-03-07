require("@nomiclabs/hardhat-waffle");
module.exports = {
  networks: {
    hardhat: {
    },
    sphinx: {
      url: "https://dapps.shardeum.org/",
      accounts:[``] // Add private key here
    },
  solidity: "0.8.3",
};