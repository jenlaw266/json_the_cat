const request = require("request");
const userInput = process.argv.slice(2);
const breedInput = userInput[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`,
  (error, response, body) => {
    if (error) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
    }
    try {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } catch (err) {
      console.log("error: breed name not found");
    }
  }
);

//> node breedFetcher.js Chartreux
//The Chartreux is generally silent but communicative. Short play sessions, mixed
