const hre  = require('hardhat');

async function main (){

  const NFT = await hre.ethers.getContractFactory("NFT");

  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("contract deployed to address : ",nft.address);

  console.log("successfully deployed :)");
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
});
