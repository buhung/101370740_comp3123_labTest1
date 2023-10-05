const fs = require("fs");
const path = require("path");

let logDirectory = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

process.chdir(logDirectory);

for (let i = 0; i < 10; i++) {
  let fileName = "log" + i + ".txt";
  fs.writeFileSync(fileName, "Some content...");
  console.log(fileName);
}