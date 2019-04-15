const fetch = require("node-fetch");
const {GH_ACCESS_TOKEN} = process.env;

exports.handler = async(event, context) => {
  if (event.httpMethod !== "POST") {
    return {statusCode: 405, body: "Method Not Allowed"};
  }

  const data = JSON.parse(event.body);

  fetch(
    "https://api.github.com/repos/fvcproductions/apprenticeships.me/issues",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${GH_ACCESS_TOKEN}`
      },
      body: JSON.stringify(data)
    }
  )
    .then((i) => {
      return {
        statusCode: 200,
        statusText: "Woohoo!" + event.body + " " + i,
        body:
          "Thank you for your contribution. Once approved, the apprenticeship will be added to the site."
      };
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body:
          "Sorry! Something went wrong. Please visit the site directly and add your contribution. <a href='https://github.com/fvcproductions/apprenticeships/issues/new/choose'>Contribute</a>"
      };
    });
};
