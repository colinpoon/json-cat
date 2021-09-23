const request = require('request');

const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;
// console.log('const URL===>', url);
// console.log('url.body===>', url.body);

request(url, function(error, response, body) {
  if (error) {
    return console.log('Failed to request details: ', error);
  }
  const data = JSON.parse(body);
  // console.log(typeof data);
  // console.log(data); // ===> prints body in array
  const breed = data[0]; // ===> prints body
  // console.log('data[0] ===>', breed);
  // console.log('breed temperament in body ===>', breed.temperament);
  // console.log('breed description in body ======>', breed.description);
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`${args} is not a breed of cat...`);
  }
});

//  Siberian