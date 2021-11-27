require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rifle stereo puppy grace nasty furnace gauge'; 
let testAccounts = [
"0x627170482e2b7bc4b0e7c5462d556e1d47feae6fdede58a74d6c2ca0b88714be",
"0x629ed5a25a204d0ec891abf495a77fc03e9a2f6e63ce6a157651f9b3c012d3d0",
"0xbc601b2095b706b145e33f3732f981efa42eb2af14216ad8ada4f9e4a2aea291",
"0x655716add837ed8480716f4509d83be4d4c4e7d81dc8a2bae158f23aff8b64a5",
"0x2090490e194e730dcdcac6ec53eb31ca63f00fb3ab4e2cf1b5d72f652a5f07fb",
"0xf6b5340832f7b8bdd20bd588f91355bb5873732ce6cff0ea05a3d7a47204f419",
"0x9890d8dcd89b46e8298985d1448f1af40a33110f8c813853e5cc558c9096baae",
"0x9d524253051788f0eb4c936d26624a996ad953afe2694d851b5216cbda5dd005",
"0x814b11f197b18288f1608836d89570e8053cc8592ea2a0ce2f5c45b635dd4f14",
"0x7fd760c6a3477379a79faad82ea29a4ea6d1e1b9da4784aba34e020756be515e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


