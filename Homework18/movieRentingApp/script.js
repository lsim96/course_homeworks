let movieArray = [
  "Terminator",
  "Beautiful Mind",
  "The Shawshank redemption",
  "Only Lovers Left Alive",
  "Into the wild",
  "The Dark Knight Rises",
  "Oppenheimer",
  "Training Day",
  "Usual suspects",
  "Kill Bill",
];

function searchMovie() {
  let movieInput = document.getElementById("movieInput").value.toLowerCase();
  let resultMessage = document.getElementById("resultMessage");

  let found = false;

  for (let i = 0; i < movieArray.length; i++) {
    if (movieArray[i].toLowerCase() === movieInput) {
      found = true;
      break;
    }
  }

  if (found) {
    resultMessage.style.color = "green";
    resultMessage.textContent = "The movie can be rented";
  } else {
    resultMessage.style.color = "red";
    resultMessage.textContent = "The movie can't be rented";
  }
}
