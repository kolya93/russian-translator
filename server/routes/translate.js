const express = require('express');
const router = express.Router();
const { translateText } = require('../services/deepl');

router.post('/', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    const translated = await translateText(text);
    res.json({ translated });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
});

module.exports = router;
