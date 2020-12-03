const request = require('request');
breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, request, body) => {
  if(err) throw new Error(err);

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found");
  } else {
    console.log("Cat Discription:", data[0].description)
  }
})