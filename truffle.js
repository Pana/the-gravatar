require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProviderV2 = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
        )
      },
      network_id: '3',
    },
    espaceTest: {
      provider: function() {
        return new HDWalletProviderV2({
          privateKeys: ['2b45171969ced462642720adbc8d5d3f9b3813576f494deac44729f2482b47ef'],
          providerOrUrl: `https://evmtestnet.confluxrpc.com`
        })
      },
      network_id: '71',
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProviderV2({
          privateKeys: ['2b45171969ced462642720adbc8d5d3f9b3813576f494deac44729f2482b47ef'],
          providerOrUrl: `https://rinkeby.infura.io/v3/b54a8d5c6af14907bf6652e5fa18a87f`
        })
      },
      network_id: '4',
    },
  },
  compilers: {
    solc: {
      version: '0.4.25'    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
