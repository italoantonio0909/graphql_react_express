const server = require("./server");

require("./database");
const port = process.env.PORT | 8000;
server
  .start({ port: port })
  .then((server) => console.log(`Server on port ${port}`));
