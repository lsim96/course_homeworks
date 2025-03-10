import http from "node:http";
import fs from "fs";
import { EventEmitter } from "node:events";

class StudentEmitter extends EventEmitter {}
const studentEmitter = new StudentEmitter();

studentEmitter.on("studentAdded", (studentName) => {
  console.log(`Student added: ${studentName}`);

  fs.appendFile("students.txt", studentName + "\n", (error) => {
    if (error) throw error;
    console.log("Student name written to students.txt");
  });
});

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.end(`<h1>Welcome to the main page!</h1>`);
  //   } else if (req.url === "/student") {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.end(
  //       `<p>Name: Leonid</p>
  //         <p>Lastname: Simonoski</p>
  //         <p>Academy: Qinshift Academy</p>
  //         <p>Subject: NodeJs-Basic</p>`
  //     );}

  //I COMMENTED OUT THE FIRST PART, SO IT WONT GET CONFUSING!!

  if (req.url === "/add_student" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<form action="/all_students" method="POST">
            <label for="studentName">Enter student name:</label><br>
            <input type="text" id="studentName" name="studentName" required><br><br>
            <button type="submit">Add Student</button>
          </form>`);
  } else if (req.url === "/all_students" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const studentName = new URLSearchParams(body).get("studentName");
      if (studentName) {
        studentEmitter.emit("studentAdded", studentName);

        res.writeHead(200, { "content-type": "text/html" });
        res.end(
          `<h1>Student ${studentName} added successfully</h1><a href="/add_student">Add another student</a>`
        );
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
