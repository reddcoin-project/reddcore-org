var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fbc0b6db'),
  addressVersion: 61,
  privKeyVersion: 189,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('CCDEC174EBD4FA10314B3B9EF9CB8ADCF9AA87E57EC6AD0D0E3C3C5AD9E068B8'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 222583475,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390280400,
    bits: 504365040
  },
  dnsSeeds: [
    'dnsseed01.redd.ink',
    'dnsseed02.redd.ink',
    'dnsseed03.redd.ink',
    'seed.reddcoin.com'
  ],
  defaultClientPort: 45444,
  lastPoWBlock: 260799
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('5AE394B3E85B8A14CAA1EA052B1EFE9DFE61FCAA77623AC56262D24CBDC92AA1'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 2108003,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1446002303,
    bits: 504365040
  },
  dnsSeeds: [
     'electrum01-testnet.reddcoin.com'],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
