const axios = require('axios');
const { OPENROUTER_URL, API_KEY } = require('../../config/env');

class OpenRouterApi {
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
