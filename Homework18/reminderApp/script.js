let reminders = [];

let titleInput = document.getElementById("titleInput");
let priorityInput = document.getElementById("priorityInput");
let colorInput = document.getElementById("colorInput");
let descriptionInput = document.getElementById("descriptionInput");
let addBtn = document.getElementById("addReminderBtn");
let showBtn = document.getElementById("showBtn");
let reminderTable = document.getElementById("reminder-table");
let reminderTableBody = reminderTable.querySelector("tbody");

addBtn.addEventListener("click", function () {
  if (
    titleInput.value === "" ||
    priorityInput.value === "" ||
    colorInput.value === "" ||
    descriptionInput.value === ""
  ) {
    alert("Please fill in all fields before adding the reminder.");
    return;
  }

  let newReminder = {
    title: titleInput.value,
    priority: priorityInput.value,
    color: colorInput.value,
    description: descriptionInput.value,
  };

  reminders.push(newReminder);

  titleInput.value = "";
  priorityInput.value = "";
  colorInput.value = "#000000";
  descriptionInput.value = "";

  alert("Reminder added!");
});

showBtn.addEventListener("click", function () {
  reminderTableBody.innerHTML = "";

  for (let i = 0; i < reminders.length; i++) {
    let reminder = reminders[i];
    let row = document.createElement("tr");

    let titleData = document.createElement("td");
    titleData.textContent = reminder.title;
    titleData.style.color = reminder.color;

    let priorityData = document.createElement("td");
    priorityData.textContent = reminder.priority;

    let descriptionData = document.createElement("td");
    descriptionData.textContent = reminder.description;

    row.appendChild(titleData);
    row.appendChild(priorityData);
    row.appendChild(descriptionData);

    reminderTableBody.appendChild(row);
  }

  reminderTable.style.display = "table";
});
