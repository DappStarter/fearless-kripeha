require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember hour harvest lobster foam sentence'; 
let testAccounts = [
"0x7be658ec8392cf438aaec269045fbed401fd8a70b4e655ea817ac84ef287e2f4",
"0x480ff697241230a1cf2ec698c58d11f139776299e4b65f806bfb4c9d74fa541b",
"0x43dff935605d34b6ce43d37dcbacc627a96ef63ef5575561881ca63e9eec395b",
"0xdd604bc3130a2af54550cee4e8f604a1c22715cdaae09cba8c3792d66dedaa59",
"0x72bc311e9a1bddd046531bdc69105836ce29e2bd75f42e1c76d4f60e6f63f4e2",
"0x76d90b47a257ad6513e362261ebb49aed5dd9e02e62dd00056919d2e7b345ddd",
"0x4fab3bcbaab05e8489f0359b2307ebe7bb2fc8d0c2820f98289f469ab4cb6583",
"0x67f4eed7867d8002b7c65320caaa1ba12449137c4c89a0648c3138929713779b",
"0x86f6da6fcf007428d8523b1fe6ad22fcad96425ab50acc5aa32269fe24320a30",
"0x8d0e65232cad98a138ca85e94b437a6181dc62f065bb4f14cfeb471fd44c9fa3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
