const fetchBreedDescription = require('./breedFetcher');
const breedQuery = process.argv.slice(2,3);


fetchBreedDescription(breedQuery, (error, description) => {
  if(error){
    console.log(error);
  } else {
    console.log(description);
  }
});