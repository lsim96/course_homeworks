let book = {
  title: prompt("Enter a title:"),
  author: prompt("Enter the authors name:"),
  readingStatus:
    prompt("Have you read this book?(yes/no)").toLowerCase() === "yes",

  status: function () {
    if (this.readingStatus) {
      console.log("Already read 'The Robots of dawn' by Isaac Asimov");
    } else {
      console.log(
        "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
      );
    }
  },
};

book.status();
