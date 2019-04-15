const form = document.querySelector(".gh-form");
const title = form.querySelector("#title");
const description = form.querySelector("#description");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const issue = {
    title: title.value.trim(),
    body: description.value.trim(),
    labels: ["enhancement", "help wanted"]
  };

  fetch("/.netlify/functions/form", {
    method: "POST",
    // method: "GET"
    headers: {
      "Content-Type": "application/json"
      // Authorization: `token ${"asdfasdf"}`
    },
    body: JSON.stringify(issue)
  })
    .then((i) => {
      return i.json();
    })
    .then((i) => {
      console.log(i);
      return i;
    });
  // https://api.github.com/repos/fvcproductions/apprenticeships.me/issues
});
