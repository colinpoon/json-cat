const request = require('request');

// const args = process.argv.slice(2);
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;
// console.log('const URL===>', url);
// console.log('url.body===>', url.body);
// request(url, function(error, response, body) {
//   if (error) {
//     return console.log('Failed to request details: ', error);
//   }
//   const data = JSON.parse(body);
//   // console.log(typeof data);
//   console.log(data); // ===> prints body in array
//   const breed = data[0]; // ===> prints body
//   // console.log('data[0] ===>', breed);
//   // console.log('breed temperament in body ===>', breed.temperament);
//   // console.log('breed description in body ======>', breed.description);
//   if (breed) {
//     console.log(breed.description);
//   } else {
//     console.log(`${args} is not a breed of cat...`);
//   }
// });
//  Siberian

const args = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  console.log('breedName', breedName);
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  console.log('url', url);
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    // console.log(data); // ===> prints body in array
    const breed = data[0]; // ===> prints body
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('breed not found');
    }
  });
};

const breed = args[0];
// console.log('args===>', args);

fetchBreedDescription(breed, (err, description) =>{
  if (err) {
    console.log('404', err);
  } else {
    console.log("description", description);
  }
});

module.exports = { fetchBreedDescription };
