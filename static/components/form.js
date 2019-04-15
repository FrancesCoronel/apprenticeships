const issue = {
  title: "Found a bug",
  body: "I'm having a problem with this.",
  assignees: ["benjaminmodayil"],
  labels: ["bug"]
};

fetch("/.netlify/functions/form", {
  // method: "POST",
  method: "GET"
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `token ${"asdfasdf"}`
  // },
  // body: JSON.stringify(issue)
})
  .then((i) => {
    return i;
  })
  .then((i) => {
    console.log(i);
  });
// https://api.github.com/repos/fvcproductions/apprenticeships.me/issues
