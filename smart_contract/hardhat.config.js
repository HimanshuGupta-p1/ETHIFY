require('@nomiclabs/hardhat-waffle');
// https://eth-sepolia.g.alchemy.com/v2/WmzRZIoc9xCCruHZsVW2WjzmSYvl7WGG
const API_URL = 'https://eth-sepolia.g.alchemy.com/v2/WmzRZIoc9xCCruHZsVW2WjzmSYvl7WGG'
const PRIVATE_KEY = '7f6d08f1a908f013bc344d6ddf0900c16c0ae7159f6bb060a88b3b62b3229d9a'
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}
// Transactions address:  0x8ce416ec42DD9B8C902BEcbBc0423d882d1a4bE2
