const redis = require("redis");
let client = redis.createClient(6379);

// make a connection to the local instance of redis
const redisConnection  = async () => {
  try {
    client.connect();

    client.on("connect", () => {
      console.error("redis connected successfully");
    });
    
    client.on("error", (error) => {
      console.error("redis connection failed ", error);
    });

  } catch (error) {
    console.error(error)
  }
};

module.exports = { redisConnection , client };
