//https://eth-ropsten.alchemyapi.io/v2/5awlhZNKv7E7JFTnxDKUYXwLgcoHlw29
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5awlhZNKv7E7JFTnxDKUYXwLgcoHlw29',
      accounts: ['8c6c2d11086c93b0e92b2bedd7162ee28c7c746463e4c0b26ecbd86c181db0c8'],
    },
  },
};