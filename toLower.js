const fs = require("fs");
const path = require("path");

const foldersToInclude = process.argv.length > 3 ? new RegExp(process.argv[3], "i") : null;
const foldersToExclude = process.argv.length > 4 ? new RegExp(process.argv[4], "i") : null;
/* const foldersToCopy = process.argv.length > 5 ? process.argv[5] : `cypress${path.sep}integration`;
const folderSplit = foldersToCopy.split(path.sep);
const copyDest = path.normalize(foldersToCopy); */
const isExcluded = (source) => { return foldersToExclude ? foldersToExclude.test(source.name) : false; };
const isDirectory = (source) => { return fs.lstatSync(source.path).isDirectory(); };
const getFiles = (source) => { return fs.readdirSync(source.path).map((name) => { return { name: name, path: path.join(source.path, name) }; }); };

const root = path.normalize(process.argv.length > 2 ? process.argv[2] : ".");
// eslint-disable-next-line
function renameFilesAndFolders(source) {
  let toDelete = [];

  const files = getFiles(source);
  for (let i = 0; i < files.length; i++) {
    const lowerName = files[i].path.toLowerCase();
    if (isDirectory(files[i])) {
      if ((source.path !== root || !foldersToInclude || foldersToInclude.test(files[i].name)) && !isExcluded(files[i])) {
        // Create new directory
        if (lowerName !== files[i]) {
          console.log(`Create directory: ${lowerName}`);
          try {
            fs.mkdirSync(lowerName);
            toDelete.push(files[i].path);
          } catch (e) { if (e.code !== "EEXIST") throw e; } 
        }

        // Delete subfolders before deleting root
        toDelete = renameFilesAndFolders(files[i]).concat(toDelete);
      }
    } else if (lowerName !== files[i].path) {
      console.log(`${files[i].path} => ${lowerName}`);
      fs.renameSync(files[i].path, lowerName);
    }
  }
  return toDelete;
}

// Rename files and folders
const toDelete = renameFilesAndFolders({ name: root.substr(root.lastIndexOf(path.sep) + 1), path: root });

// Delete old folders
for (let i = 0; i < toDelete.length; i++) {
  console.log(`Delete directory: ${toDelete[i]}`);
  fs.rmdirSync(toDelete[i]);
}
