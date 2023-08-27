## My Hardhat Token

This repository contains a simple Solidity smart contract for creating and managing a token called "My Hardhat Token" (MHT). The token contract is written in Solidity version 0.8.0 and includes basic functionality for transferring tokens between accounts.

### Contract Details

- **Name**: My Hardhat Token
- **Symbol**: MHT
- **Total Supply**: 1,000,000 tokens

### Contents

This repository consists of the following files:

1. **contracts/Token.sol**: The main Solidity smart contract file that defines the behavior of the token. It includes functions for transferring tokens and checking balances.

2. **scripts/deploy.js**: A deployment script using Hardhat to deploy the token contract to the Ethereum network.

3. **test/Token.js.js**: A test file containing Mocha and Chai tests to ensure the correct behavior of the token contract. It covers deployment details, token transfers, and event emissions.

### Getting Started

To use this repository and interact with the token contract, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/HMFazleRabbi/hat-practice.git
   cd hat-practice
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Deploy the token contract to the Ethereum network using Hardhat:

   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

   Replace `<network-name>` with the name of the Ethereum network you want to deploy to.

4. Run the tests to ensure the correct functionality of the token contract:

   ```bash
   npx hardhat test
   ```
### Deployed Contract
The token contract has been successfully deployed to the Ethereum network. Here are the deployment details:

- Network: Sepolia
- Deployer Address: 0xC24Be7F49a50996a46EE6b6aCaeAeD49068A57Ad

- Token Address: 0x4D6b1C6c9435b84039cB28c7208A6CE9BAfC21e2


### Important Notes

- The contract has been written for educational purposes and may not be suitable for production use without further development and security audits.

- Make sure to have an Ethereum wallet like MetaMask configured with the desired network (Mainnet, Ropsten, etc.) to interact with the deployed contract.

- The contract uses the Hardhat development environment for testing and deployment. Ensure you have Hardhat installed (`npm install -g hardhat`) and configured to your requirements.

### License

This project is licensed under the [UNLICENSED](LICENSE) license.

Feel free to use, modify, and distribute this code as needed. However, keep in mind that this is a basic example and might require additional enhancements and security measures for production use.
