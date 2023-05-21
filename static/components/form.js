const form = document.querySelector(".gh-form");
const formParent = form.parentNode;
const title = form.querySelector("#title");
const link = form.querySelector("#link");
const description = form.querySelector("#description");
const locations = form.querySelector("#locations");
const formButton = document.querySelector(".gh-form__button");
const loader = document.querySelector(".icon-loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formButton.classList.add("hidden");
  loader.classList.remove("hidden");

  const URL = "/.netlify/functions/form";
  const issue = {
    title: `Add: ${title.value.trim()}`,
    body: `## Company
\n
${title.value.trim()}
\n
\n
## Description
\n
${description.value.trim()}
\n
\n
## Link
\n
${link.value.trim()}
\n
\n
## Location
\n
${locations.value.trim()}
\n
*This entry was submitted by the form on the site*
`,
    labels: ["enhancement", "help wanted"]
  };

  const doesErrorExist = document.querySelector(".form-error");
  if (doesErrorExist) {
    doesErrorExist.remove();
  }

  const paragraph = document.createElement("p");
  const classes = [
    "form-error",
    "text-red",
    "text-base",
    "mb-6",
    "text-center"
  ];
  paragraph.classList.add(...classes);
  paragraph.innerHTML = "";
  form.prepend(paragraph);

  if (grecaptcha && grecaptcha.getResponse().length > 0) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(issue)
    })
      .then((i) => {
        if (i.status !== 200) {
          throw Error();
        }
        return i;
      })
      .then(() => {
        formParent.innerHTML = `
      <p>Thank you for your contribution!</p>
      `;
        formButton.classList.remove("hidden");
        loader.classList.add("hidden");
      })
      .catch((err) => {
        formButton.classList.remove("hidden");
        loader.classList.add("hidden");
        paragraph.innerHTML = `Oh no, something went wrong. <br> Please try again or enter it directly <a class="font-bold text-green-dark hover-text-green-darker no-underline hover-underline transition"
        href="https://github.com/FrancesCoronel/apprenticeships.me/issues/new/choose">here</a>.`;
      });
  } else {
    paragraph.innerHTML = "Oops, you have to check the recaptcha!";
  }
});
