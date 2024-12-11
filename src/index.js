const timestamp = require("./timestamp");

const collection = () => {
  const data = timestamp();

  return data;
};

// console.log(collection());

module.exports = collection;
