const express = require("express");
const cors = require("cors");
const app = express();
const { redisConnection } = require('./db/redis');


app.use(cors());
app.use(express.json());

// Connection to redis
redisConnection()

// Routes will always go here
app.use("/", require("./routes/urls"));

app.listen(3002, () => {
  console.log(`server running on port 3002`);
});
