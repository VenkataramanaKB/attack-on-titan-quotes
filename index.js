const express = require("express");
const quotes = require("./quotes");

const app = express();
const cors = require('cors');
app.use(cors()); // Allow all origins

let lastQuoteIndex = -1;

app.get("/quote", (req, res) => {
    let randomIndex;

    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex); 

   
    lastQuoteIndex = randomIndex;

    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

module.exports = app;
