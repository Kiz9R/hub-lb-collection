const timestamp = require("./timestamp");

const collection = (file) => {
  if (file === "timestamp") {
    const data = timestamp();
    return data;
  }
  return `Feature not available: ${file}`;
};

// console.log(collection());

module.exports = collection;
