const form = document.querySelector(".gh-form");
const title = form.querySelector("#title");
const link = form.querySelector("#link");
const description = form.querySelector("#description");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const issue = {
    title: title.value.trim(),
    body: description.value.trim() + " \n " + link.value.trim(),
    labels: ["enhancement", "help wanted"]
  };

  fetch("/.netlify/functions/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(issue)
  })
    .then((i) => {
      // console.log();
      return i.body.json();
    })
    .then((i) => {
      console.log(i);
    })
    .catch((err) => console.log(err));
});
