const fetch = require("node-fetch");
const {GH_ACCESS_TOKEN} = process.env;

// const API_ENDPOINT =
//   "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

exports.handler = async(event, context) => {
  // return fetch(API_ENDPOINT)
  //   .then((response) => response.json())
  //   .then((data) => ({
  //     statusCode: 200,
  //     body: `${data.setup} ${data.punchline} *BA DUM TSSS*`
  //   }))
  //   .catch((error) => ({statusCode: 422, body: String(error)}));
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};

// User fills out form, form hits this function, function calls a process.env.access_token for GH permissions
