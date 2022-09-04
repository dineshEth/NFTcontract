//SPDX-License-Identifier:MIT

//solidity version 
pragma solidity ^0.8.6;

// importing contracts and library from openzeppelin library
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// nft contract
contract NFT is ERC721URIStorage,Ownable{
    // using library 
    using Counters for Counters.Counter;
    // private variables 
    Counters.Counter private _tokenIds;

    // constructor function assigns value to inherited contracts' constructor
    constructor() ERC721("Dinesh Eth", "DE7"){}
                //         name       symbol

    // maint function 
    function maint(address recipient, string memory tokenURI) public onlyOwner returns (uint){
        // token id increments : to keep track 
        _tokenIds.increment();

        // variable stores current tokenId
        uint256 newItemId = _tokenIds.current();

        // this _mint function mints the nft and it is imported from openzeppelin library
        _mint(recipient,newItemId);

        
        // _setTokenURI functions set the tokenId and the TokenURI
        _setTokenURI(newItemId,tokenURI);

        // current tokenId returns 
        return newItemId;
    }
}