const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {

    async function deployTokenFixture() {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const hardhatToken = await ethers.deployContract("Token");

        return {hardhatToken, owner, addr1, addr2}

    }






  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });





});