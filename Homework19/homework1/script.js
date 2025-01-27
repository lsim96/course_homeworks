let currentPage = 1;

let getPlanetInfo = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let planets = data.results.slice(0, 10);
      showPlanetDetails(planets);
      showPrevNextBtns(data.next, data.previous);
    })
    .catch((response) => {
      console.log("Error fetching planets data:", response);
    });
};

let showPlanetDetails = (planets) => {
  let tableBody = document.querySelector("#planets-table tbody");
  let mainTable = document.getElementById("planets-table");
  tableBody.innerHTML = "";
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        `;
    tableBody.appendChild(row);
  }
  mainTable.style.display = "table";
};

let showPrevNextBtns = (nextUrl, prevUrl) => {
  let nextBtn = document.getElementById("nextBtn");
  let prevBtn = document.getElementById("prevBtn");

  if (nextUrl) {
    nextBtn.style.display = "inline-block";
    nextBtn.onclick = () => {
      currentPage++;
      getPlanetInfo(nextUrl);
    };
  } else {
    nextBtn.style.display = "none";
  }

  if (prevUrl) {
    prevBtn.style.display = "inline-block";
    prevBtn.onclick = () => {
      currentPage--;
      getPlanetInfo(prevUrl);
    };
  } else {
    prevBtn.style.display = "none";
  }
};

document.getElementById("planetBtn").addEventListener("click", () => {
  let url = "https://swapi.py4e.com/api/planets/?page=1";
  getPlanetInfo(url);
  document.getElementById("planetBtn").style.display = "none";
});
