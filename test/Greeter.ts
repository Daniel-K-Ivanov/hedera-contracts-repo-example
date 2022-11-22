const {ethers} = require("hardhat");

describe("Deploy greeter tests", function () {
  it("should be able to deploy", async function () {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Holla');
    const address = (await greeter.deployTransaction.wait()).contractAddress
    console.log(address);
  });
});