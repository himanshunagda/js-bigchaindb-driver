const base58 = require('bs58');
const forge = require('node-forge');
/**
 * @public
 * Ed25519 keypair in base58 (as BigchainDB expects base58 keys)
 * @type {Object}
 * @param {Buffer} [seed] A seed that will be used as a key derivation function
 * @property {string} publicKey
 * @property {string} privateKey
 */
const Ed25519Keypair = async () => {
  var ed25519 = forge.pki.ed25519;
  var keys = {};
  var keyPair = ed25519.generateKeyPair();
  keys.publicKey = await base58.encode(Buffer.from(keyPair.publicKey))
  keys.privateKey = await base58.encode(Buffer.from(keyPair.privateKey.slice(0, 32)))
  return keys;
};

module.exports = Ed25519Keypair;