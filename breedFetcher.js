const request = require('request');
const breedQuery = process.argv.slice(2,3);

const catBreed = request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (err, response, body) => {
  if(err) throw(err);

  console.log(JSON.parse(body)[0].description);
});