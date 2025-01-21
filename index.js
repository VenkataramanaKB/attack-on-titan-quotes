const express = require("express");
const quotes = require("./quotes");

const app = express();

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
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "documentation/build", "index.html"));
});


module.exports = app;
