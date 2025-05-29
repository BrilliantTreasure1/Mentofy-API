/**
 * Description placeholder
 *
 * @type {*}
 */
const axios = require('axios');
/**
 * Description placeholder
 *
 * @type {*}
 */
const { OPENROUTER_URL, API_KEY } = require('../../config/env');

/**
 * Description placeholder
 *
 * @class OpenRouterApi
 * @typedef {OpenRouterApi}
 */
class OpenRouterApi {
  /**
 * Description placeholder
 *
 * @async
 * @param {{ model: any; messages: any; }} param0 
 * @param {*} param0.model 
 * @param {*} param0.messages 
 * @returns {unknown} 
 */
async createChatCompletion({ model, messages }) {
    try {
      const response = await axios.post(
        OPENROUTER_URL,
        { model, messages },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('OpenRouter API error:', error.response?.data || error.message);
      throw new Error('خطا در ارتباط با مدل');
    }
  }
}

module.exports = OpenRouterApi;
