const unique = (array, propertyName) => {
  return array.filter(
    (e, i) => array.findIndex((a) => a[propertyName] === e[propertyName]) === i
  );
};

const commits = fetch(
  "https://api.github.com/repos/fvcproductions/apprenticeships/commits?per_page=100"
)
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    return i.map((x) => {
      return {
        user: x.committer.login,
        avatar: x.committer.avatar_url,
        url: x.committer.html_url
      };
    });
  });

const pulls = fetch(
  "https://api.github.com/repositories/85346634/pulls?state=all&per_page=100"
)
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    return i.map((x, index) => {
      return {
        user: x.user.login,
        avatar: x.user.avatar_url,
        url: x.user.html_url
      };
    });
  });

const result = Promise.all([commits, pulls])
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
    const unorderedList = document.querySelector("#contributor-list");
    const banned = [
      "web-flow",
      "renovate-bot",
      "renovate[bot]",
      "imgbot[bot]",
      "ImgBotApp",
      "code-factor"
    ];
    const uniqItems = unique(i, "user").filter((x) => !banned.includes(x.user));

    uniqItems.forEach((i) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${
        i.url
      }" target="_blank" rel="nooppener"><img class="w-24 h-24 rounded-full" src="${
        i.avatar
      }" alt="${i.user}"/></a>`;
      li.classList.add(
        "m-2",
        "rounded-full",
        "shadow",
        "hover-shadow-lg",
        "transition"
      );
      unorderedList.append(li);
    });
  });
