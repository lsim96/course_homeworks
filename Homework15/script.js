function makeTable() {
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  if (!isNaN(rows) && !isNaN(columns)) {
    let div = document.getElementById("mainDiv");
    if (div.childNodes.length) {
      div.innerHTML = "";
    }

    let table = document.createElement("table");
    div.appendChild(table);
    table.id = "table1";

    for (let r = 1; r < rows; r++) {
      let tr = document.createElement("tr");
      tr.id = "tr1";

      for (let c = 1; c < columns; c++) {
        let td = document.createElement("td");
        td.id = "td1";
        td.textContent = "Row- " + r + ", Column- " + c;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }
}
