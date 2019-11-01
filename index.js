// Import Server
const server = require("./api/server.js");

// Port
const PORT = process.env.PORT || 8888;

// Listen to Server
server.listen(PORT, () => {
  console.log(`=== webAPI server on http://localHost:${PORT}`);
});
