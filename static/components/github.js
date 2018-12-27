function unique(array, propertyName) {
  return array.filter(
    (e, i) => array.findIndex((a) => a[propertyName] === e[propertyName]) === i
  );
}

let commits = fetch(
  "https://api.github.com/repos/fvcproductions/apprenticeships/commits"
)
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    let unorderedList = document.querySelector("#contributor-list");

    return i.map((x, index) => {
      return {
        user: x.committer.login,
        avatar: x.committer.avatar_url
      };
    });
  });

let pulls = fetch(
  "https://api.github.com/repos/fvcproductions/apprenticeships/pulls?state=all"
)
  .then((i) => {
    return i.json();
  })
  .then((i) => {
    // console.log(i);
    return i.map((x, index) => {
      return {
        user: x.user.login,
        avatar: x.user.avatar_url
      };
    });
  });

let result = Promise.all([commits, pulls])
  .then((i) => {
    let all = [];
    i.map((x) => {
      x.map((p) => {
        all.push(p);
      });
    });
    return all;
  })
  .then((i) => {
    let unorderedList = document.querySelector("#contributor-list");

    let uniqItems = unique(i, "user").filter(
      (x) =>
        x.user !== "web-flow" &&
        x.user !== "renovate-bot" &&
        x.user !== "renovate[bot]"
    );
    uniqItems.forEach((i) => {
      let li = document.createElement("li");
      li.innerHTML = `
        <a href="">
          <img class="w-12 h-12 rounded-full" src="${i.avatar}" alt="${
        i.user
      }"/>
        </a>
      `;
      li.classList.add("mb-2");
      unorderedList.append(li);
    });
  });
