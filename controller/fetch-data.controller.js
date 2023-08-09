const axios = require("axios");
const DEFAULT_EXPIRATION = 3600;
const { client } = require("../db/redis");

const fetchData = async (request, response, next) => {
  try {
    // Getting the key
    const data = await client.get("entries");
    if (data) {
      console.log("cache hit");
      response.json(JSON.parse(data));
    } else {
      console.log("cache miss");
      const options = {
        method: "GET",
        url: "https://api.publicapis.org/entries",
      };
      const value = await axios.request(options);
      // Setting the key
      client.setEx("entries", DEFAULT_EXPIRATION, JSON.stringify(value.data));
      response.json(value.data);
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = fetchData;
