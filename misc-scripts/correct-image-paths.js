const fs = require("fs");
const path = require("path");
const matchObj = [];

const findDistMatch = () => {
  return new Promise(function(resolve, reject) {
    fs.readdir(path.resolve(__dirname, "../dist"), function(err, flist) {
      if (err) {
        console.log("Error reading directory ");
        console.log(err);
        return;
      }
      const matches = flist.map((apprenticeship) => {
        const file = apprenticeship.split(".");
        const name = file[0];
        const hash = file[1];
        const type = file[2];
        const match = matchObj.map((i) => {
          if (i.name === name && i.type === type) {
            i.hash = hash;
          }
        });

        return match[0];
      });
      resolve(matches);
      return matches;
    });
  });
};

fs.readFile(path.resolve(__dirname, "../public/algolia.json"), function read(
  err,
  data
) {
  if (err) {
    throw err;
  }
  content = JSON.parse(data);
  content.map((i, index) => {
    const file = i.image.split(".");
    const name = file[0];
    const type = file[1];
    matchObj.push({name, type});
    return i.image;
  });
  findDistMatch()
    .then(() => {
      content.map((x) => {
        const file = x.image.split(".");
        const name = file[0];
        const type = file[1];

        const match = matchObj.map((b) => {
          if (b.name === name && b.type === type) {
            x.image = `${b.name}.${b.hash}.${b.type}`;
          }
        });

        return x.image;
      });
    })
    .then(() => {
      fs.writeFile(
        path.resolve(__dirname, "../public/algolia.json"),
        JSON.stringify(content),
        () => console.log("success")
      );
    });
});
