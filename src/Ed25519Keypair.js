'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ed25519Keypair;

var _bs = require('bs58');

var _bs2 = _interopRequireDefault(_bs);

var forge = require('node-forge');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @public
 * Ed25519 keypair in base58 (as BigchainDB expects base58 keys)
 * @type {Object}
 * @param {Buffer} [seed] A seed that will be used as a key derivation function
 * @property {string} publicKey
 * @property {string} privateKey
 */
function Ed25519Keypair(seed) {
  var ed25519 = forge.pki.ed25519;
  var keyPair = ed25519.generateKeyPair();
  this.publicKey = _bs2.default.encode(keyPair.publicKey);
  this.privateKey = _bs2.default.encode(keyPair.privateKey.slice(0, 32));
}
