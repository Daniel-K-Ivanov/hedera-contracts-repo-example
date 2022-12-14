# Sample Hardhat Project for Hedera

This project demonstrates a basic Hardhat use case working with Hedera Hashgraph. It comes with a sample contract, a 
test for that contract, and a script that deploys that contract.


In order for the tests to run against the Hedera EVM, you must start a `@hashgraph/hedera-local` node prior to 
executing tests.

## Run Unit Tests

1. `npm install`
2. `./node_modules/@hashgraph/hedera-local/cli.js start`
3. Wait for the node to start
4. `npx hardhat test`

## Contract Deployment

1. Populate the `privateKey` for the deployment account in `hardhat.config.ts`. You can get such PK from the [Hedera 
   Portal](https://portal.hedera.com/)
2. `npx hardhat run ./scripts/deploy.ts --network testnet`