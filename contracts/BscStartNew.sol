// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BscStart is ERC20{
    constructor(string memory name, string memory symbol, uint totalSupply) ERC20(name, symbol){
        _mint(msg.sender,totalSupply*1000000000000000000);
    }
}
 contract BuyToken is Ownable{
     IERC20 private token;
     uint public buyRatio = 100000;// 1eth = 100.000 token
     address private master;

     constructor(address tokenAddress){
         token = IERC20(tokenAddress);
         master = msg.sender;
     }

    function buyToken() public payable {
         token.transfer(msg.sender,msg.value*buyRatio);
     }


    function withdrawETH() public onlyOwner{
         payable(owner()).transfer(address(this).balance);
     }

    function setBuyRatio(uint _ratio) public onlyOwner{
        buyRatio = _ratio;
    }
 }