// const fs = require("fs");
// const {promisify} = require("util");
// const path = require("path");
// const readDir = promisify(fs.readdir);
// const readFile = promisify(fs.readFile);

// const matchObj = [];

// const findDistMatch = async() => {
//   const directory = await readDir(path.resolve(__dirname, "../dist"));
//   const attributeHash = (fileName) => {
//     const name = fileName[0];
//     const hash = fileName[1];
//     const type = fileName[2];
//     const match = matchObj.map((i) => {
//       if (i.name === name && i.type === type) {
//         i.hash = hash;
//       }
//     });
//     return match;
//   };

//   return directory.map((file) => {
//     const fileName = file.split(".");
//     return attributeHash(fileName)[0];
//   });
// };

// const addCorrectImageToJSONFile = (content, match) => {
//   const attributeFile = (fileName, match) => {
//     const name = fileName[0];
//     const type = fileName[1];
//     matchObj.map((b) => {
//       if (b.name === name && b.type === type && b.hash !== undefined) {
//         match.image = `${b.name}.${b.hash}.${b.type}`;
//       } else {
//         throw new Error(
//           "The Image Path identifier has failed! Try running the build one more time."
//         );
//       }
//     });
//   };

//   return content.map((x) => {
//     const fileName = x.image.split(".");
//     attributeFile(fileName, x);
//     return x.image;
//   });
// };

// const initScript = async() => {
//   const data = readFile(path.resolve(__dirname, "../public/algolia.json"), () =>
//     console.log("complete")
//   );
//   const content = JSON.parse(await data);
//   content.map((i) => {
//     const file = i.image.split(".");
//     const name = file[0];
//     const type = file[1];
//     matchObj.push({name, type});
//     return i.image;
//   });

//   await findDistMatch();
//   addCorrectImageToJSONFile(content);
//   fs.writeFile(
//     path.resolve(__dirname, "../public/algolia.json"),
//     JSON.stringify(content),
//     () => console.log("complete")
//   );
// };

// initScript();
