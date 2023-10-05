const fs = require("fs");
const path = require("path");

let logDirectory = path.join(process.cwd(), "Logs");

if (fs.existsSync(logDirectory)) {
  fs.readdirSync(logDirectory).forEach((fileName) => {
    let filePath = path.join(logDirectory, fileName);
    fs.unlinkSync(filePath);
    console.log(`Delete files... ${fileName}`);
  });

  fs.rmdirSync(logDirectory);
}