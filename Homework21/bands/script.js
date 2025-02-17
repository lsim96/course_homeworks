let url =
  "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json";

async function bandsAppAsync() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching band data:", error);
  }
}

async function bandListAsync() {
  let bandData = await bandsAppAsync();

  let tbody = document.querySelector("#band-list tbody");
  tbody.innerHTML = "";

  bandData.forEach((band, index) => {
    let row = document.createElement("tr");

    let rowNumber = document.createElement("td");
    rowNumber.textContent = index + 1;

    let bandName = document.createElement("td");
    bandName.textContent = band.name;

    let activeStatus = document.createElement("td");
    activeStatus.className = band.active ? "active" : "inactive";
    activeStatus.textContent = band.active ? "Active" : "Inactive";

    let tags = document.createElement("td");
    tags.textContent = band.tags.join(", ");

    let currentMembers = band.members.filter((member) => !member.former);
    let members = document.createElement("td");
    members.textContent = currentMembers
      .map((member) => member.name)
      .join(", ");

    let totalAlbums = document.createElement("td");
    totalAlbums.textContent = band.albums.length;

    row.appendChild(rowNumber);
    row.appendChild(bandName);
    row.appendChild(activeStatus);
    row.appendChild(tags);
    row.appendChild(members);
    row.appendChild(totalAlbums);

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", bandListAsync);
