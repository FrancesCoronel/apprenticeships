const issue = {
  title: "Found a bug",
  body: "I'm having a problem with this.",
  assignees: ["benjaminmodayil"],
  labels: ["bug"]
};

fetch("https://api.github.com/repos/fvcproductions/apprenticeships.me/issues", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${"asdfasdf"}`
  },
  body: JSON.stringify(issue)
})
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    console.log(i);
  });
