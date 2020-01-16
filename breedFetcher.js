const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    let error, description;
    if(err) error = "URL not working :(";
    else if(response.statusCode !== 200)
      error = "No response. Please try again."
    else {
      const breedsArray = JSON.parse(body);
      if(breedsArray.length === 0) error = 'Breed not found.';
      else if(breedsArray.length === 1) description = breedsArray[0].description;
      else {
        description = (`Multiple breeds matched. Did you mean ${breedsArray[0].name}? \n ${breedsArray[0].description}`);
      }
    } callback(error, description); 
  });
};

module.exports = fetchBreedDescription;