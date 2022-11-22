import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-gas-reporter';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  gasReporter: {
    enabled: true,
  },
  solidity: "0.8.17",
  networks: {
    dev: {
      url: 'http://localhost:7546',
      accounts: [
        '0x105d050185ccb907fba04dd92d8de9e32c18305e097ab41dadda21489a211524', // DEV PK do not use in Production
      ],
    },
    testnet: {
      url: 'https://testnet.hashio.io/api',
      accounts: [] // TODO add PKs for `alias ECDSA` accounts here. You can get one at portal.hedera.com
    }
  },
  defaultNetwork: 'dev'
};

export default config;
