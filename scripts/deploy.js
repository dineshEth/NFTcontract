// import hardhat
const hre  = require('hardhat');

async function main (){

//getting or reading the contract 
  const NFT = await hre.ethers.getContractFactory("NFT");

  // deploing contract
  const nft = await NFT.deploy();

  //awaits to deployed 
  await nft.deployed();

  // address is very important so keep it 
  console.log("contract deployed to address : ",nft.address);


  console.log("successfully deployed :)");
}

// call to main function
main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
});
