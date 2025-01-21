const { quotes } = require('./quotes');

module.exports = (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
};
