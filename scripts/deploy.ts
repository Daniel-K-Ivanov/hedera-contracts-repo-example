import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Holla');
  const address = (await greeter.deployTransaction.wait()).contractAddress
  console.log(address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
