const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error);
      }

      const data = JSON.parse(body);
      const breed = data[0];

      if (breed) {
        return callback(null, breed.description);
      } else {
        return callback("missing breed", null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
//> node breedFetcher.js Chartreux
//The Chartreux is generally silent but communicative. Short play sessions, mixed
