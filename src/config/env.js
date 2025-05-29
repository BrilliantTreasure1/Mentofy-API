// src/config/env.js
/**
 * Description placeholder
 *
 * @type {*}
 */
const path = require('path');
/**
 * Description placeholder
 *
 * @type {*}
 */
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

console.log('[ENV] OPENROUTER_URL =', process.env.OPENROUTER_URL);

module.exports = {
  API_KEY: process.env.API_KEY,
  OPENROUTER_URL: process.env.OPENROUTER_URL,
  PORT: process.env.PORT || 3000
};
