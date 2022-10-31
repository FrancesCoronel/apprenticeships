const fs = require("fs");
const path = require("path");
const axios = require("axios");

const unique = (array, propertyName) => {
  return array.filter(
    (e, i) =>
      array.findIndex((a) => {
        return a && e && a[propertyName] === e[propertyName];
      }) === i
  );
};

const commits = axios
  .get(
    "https://api.github.com/repos/francescoronel/apprenticeships/commits?per_page=100"
  )
  .then((i) => {
    return i.data.map((x) => {
      if (x && x.committer !== null) {
        return {
          user: x.committer.login,
          avatar: x.committer.avatar_url,
          url: x.committer.html_url
        };
      }
    });
  });

const pulls = axios
  .get(
    "https://api.github.com/repositories/85346634/pulls?state=all&per_page=100"
  )
  .then((i) => {
    return i.data.map((x, index) => {
      return {
        user: x.user.login,
        avatar: x.user.avatar_url,
        url: x.user.html_url
      };
    });
  });

Promise.all([commits, pulls])
  .then((i) => {
    const all = [];
    i.map((x) => {
      x.map((p) => {
        all.push(p);
      });
    });
    return all;
  })
  .then((i) => {
    const banned = [
      "web-flow",
      "renovate-bot",
      "renovate[bot]",
      "imgbot[bot]",
      "ImgBotApp",
      "code-factor",
      "dependabot[bot]",
      "ghost",
      "snyk-bot",
      "restyled-io[bot]"
    ];

    const data = unique(i, "user").filter(({user}) => {
      console.log(user);
      return !banned.includes(user);
    });
    return JSON.stringify(data);
  })
  .then((res) => {
    return fs.writeFile(
      path.resolve(__dirname, "../data/github.json"),
      res,
      () => {
        return;
      }
    );
  });
