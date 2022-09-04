//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage,Ownable{
    // using library 
    using Counters for Counters.Counter;
    // private variables 
    Counters.Counter private _tokenIds;
    constructor() ERC721("Dinesh Eth", "DE7"){}

    function maint(address recipient, string memory tokenURI) public onlyOwner returns (uint){
        // token id increments
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();

        _mint(recipient,newItemId);

        _setTokenURI(newItemId,tokenURI);

        return newItemId;
    }
}