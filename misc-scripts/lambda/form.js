const fetch = require("node-fetch");
const {GH_ACCESS_TOKEN, GOOGLE_CAPTCHA} = process.env;

exports.handler = async(event, context) => {
  const data = JSON.parse(event.body);

  if (
    event.body.captcha === undefined ||
    event.body.captcha === "" ||
    event.body.captcha === null
  ) {
    return {statusCode: 401, success: false, body: "Please select captcha"};
  }

  if (event.httpMethod !== "POST") {
    return {statusCode: 405, body: "Method Not Allowed"};
  }

  return fetch(
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
        body: "Sorry! Something went wrong."
      };
    });
};
