const request = require('request');

const catBreed = request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {
  console.log(JSON.parse(body)[0].description);
});