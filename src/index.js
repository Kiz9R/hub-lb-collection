const timestamp = require("./timestamp");
const { graphQl } = require("./Errors");

const collection = (file, api, params) => {
  if (file === "timestamp") {
    const data = timestamp();
    return data;
  }
  if (file === "graphQl") {
    const data = graphQl(api, params);
    return data;
  }

  return `Feature not available: ${file}`;
};

// console.log(collection());

module.exports = collection;
