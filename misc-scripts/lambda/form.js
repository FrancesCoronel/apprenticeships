const fetch = require("node-fetch");
const {GH_ACCESS_TOKEN, GOOGLE_CAPTCHA} = process.env;

exports.handler = async(event, context) => {
  const data = JSON.parse(event.body);

  if (
    data.captcha === undefined ||
    data.captcha === "" ||
    data.captcha === null
  ) {
    return {success: false, msg: "Please select captcha"};
  }

  const URL = `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_CAPTCHA}&response=${
    data.captcha
  }`;

  return fetch(URL)
    .then((i) => {
      return JSON.parse(i);
    })
    .then((body) => {
      // If Not Successful
      if (body.success !== undefined && !body.success) {
        return {
          statusCode: 401,
          success: false,
          body: "Failed captcha verification"
        };
      }

      if (event.httpMethod !== "POST") {
        return {statusCode: 405, body: "Method Not Allowed"};
      }

      // start form to github submission
      //If Successful

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
            statusText: "Woohoo!" + data + " " + i,
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

      // end form to github submission
    })
    .catch((err) => {
      return {
        statusCode: 401,
        success: false,
        statusText: err
      };
    });
};
