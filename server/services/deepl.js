const deepl = require('deepl-node');

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

const translateText = async (text) => {
  const result = await translator.translateText(text, 'ru', 'en-US');
  return result.text;
};

module.exports = { translateText };
