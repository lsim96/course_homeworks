import fs from "fs";
import path from "path/posix";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

const __dirname = path.dirname(__filename);
console.log(__dirname);

const newFile = path.join(__dirname, "hello.txt");

fs.writeFileSync(newFile, "Homework 02 in Basic Node");

fs.appendFileSync(newFile, "\nFINISHED!");

const newFileContent = fs.readFileSync(newFile, "utf-8");
console.log(newFileContent);
