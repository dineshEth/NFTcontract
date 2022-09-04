// import dotenv and config 
require("dotenv").config();

// requires to all the important data to sign your mint nft
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// alchemy and web3 
const {createAlchemyWeb3}=require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//requireing  abi of contract 
const contract = require(
    "../artifacts/contracts/NFT.sol/NFT.json"
);

// reads contract 
console.log(JSON.stringify(contract.abi));

//address to read contract 
const contractAddress = "0xF2AdcEF0d1Ea2cF842f08E6b6191740eeace0bB4";

//reading 
const nftContract = new web3.eth.Contract(contract.abi,contractAddress);


// minting function
async function mintNFT(tokenURI){
    // nonce 
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");
    // transaction 
    const tx ={
        'from':PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data':nftContract.methods.maint(PUBLIC_KEY,tokenURI).encodeABI(),
    };

    // signpromise and send transaction
    const signPromise = web3.eth.accounts.signTransaction(tx,PRIVATE_KEY);
    signPromise
        .then((signedTx)=>{
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function(err,hash){
                    if(!err){
                        console.log(
                        "The hash of your transaction is : ",
                        hash,
                        "\nCheck alchemy's Mempool to view the status of your transaction:)"
                    );
                    }else{
                        console.log(
                            "Something went wrong when submitting your transaction:",
                            err
                            );
                    }
                }
            );
        }
    )
    .catch((err)=>{
        console.log("Promise failed: ",err);
        }
    );

}
// pass link of metadata which is deployed on pinata
mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmeuhiEVfNVQ1FBbjLbj7hcYLio34N9FDKEUfhYk1AAgAt"
    );



    //The hash of your transaction is :  0x392db53a75d887d723d8c4dc6093ee6e2d030949e7e93e261426d293c2fe8a15   id =1
    //The hash of your transaction is :  0x0fcb43f5898001fb23805cb9d1e8683666301a14f5024c919dd2035b5d0e9834   id =2
    //The hash of your transaction is :  0x6c8207e6dd3fa1040b2ea14d91982adc7d9f5a6131a1d52fe5fb36bf98d61c56   id =3