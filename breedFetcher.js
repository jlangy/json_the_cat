const request = require('request');
const breedQuery = process.argv.slice(2,3);

const catBreed = request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (err, response, body) => {
  if(response && response.statusCode === 200){
    const breedsArray = JSON.parse(body);
    if(breedsArray.length === 0) console.log('Breed not found.');
    else if(breedsArray.length === 1) console.log(breedsArray[0].description);
    else {
      console.log(`Multiple breeds matched. Did you mean ${breedsArray[0].name}?`);
      console.log(breedsArray[0].description);
    }
  } else {
    console.log('Catapi not responding. Please try again.')
  }
});