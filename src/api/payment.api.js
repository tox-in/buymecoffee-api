/**
 * @license Apache-2.0
 * *@copyright 2024 tonyherve
  */

'use strict';

/**
 * node modules
 */

const axios = require('axios').default;
const crypto = require('crypto');
require('dotenv').config();

const cryptomus = axios.create({
  baseURL: 'https://api.cryptomus.com/v1'
});

const DEFAULT_CURRENCY = 'USD';

const createInvoice = async (amount) => {
  try {

    const data = {
      amount:amount.toString(),
      currency:DEFAULT_CURRENCY,
      orderId:crypto.randomBytes(12).toString('hex'),
      url_callback: 'https://buymecoffee-api.onrender.com/checkout/callback',
      url_success:'https://www.buymecoffee-api.onrender.com',
      lifetime: 300
    }

    const sign = crypto
    .createHash('md5')
    .update(Buffer.from(JSON.stringify(data)).toString('base64') + process.env.PAYMENT_API_KEY)
    .digest("hex");

    const headers = {
      merchant: process.env.MERCHANT_ID,
      sign
    }

    const response = await cryptomus.post('/payment', data, {
      headers
    });

    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createInvoice };