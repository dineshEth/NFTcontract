
//imports
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

//read
const {API_URL,PRIVATE_KEY} = process.env;

// codeis important
// add your networks and RPC and private keys 
module.exports={
  solidity : "0.8.9",
  defaultNetwork:"goerli",
  networks: {
    hardhat:{},
    rinkeby:{
      url:`${API_URL}`,
      accounts : [PRIVATE_KEY]
    },
    goerli: {
      url:API_URL,
      accounts : [PRIVATE_KEY]
    },
  },
};

// smart conrtract deployed to addresss :  0xF2AdcEF0d1Ea2cF842f08E6b6191740eeace0bB4
