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
    Authorization: `token ${"20a32b3ad2d2b8892ef75060457df5c62c0c7deb"}`
  },
  body: JSON.stringify(issue)
})
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    console.log(i);
  });
