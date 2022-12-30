const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function drawCalendar(container, year, month) {
  const table = document.createElement("table");

  const date = new Date(year, month);

  const weekdaysRow = document.createElement("tr");

  for (let i = 0; i < weekdays.length; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    weekdaysRow.append(th);
  }

  table.append(weekdaysRow);

  let currentDate = date,
    currentMonthDay = 1;

  let tr = document.createElement("tr");
  let currentWeekday = 0;

  while (currentDate.getMonth() === month) {
    const td = document.createElement("td");

    if (currentDate.getDay() === currentWeekday) {
      td.textContent = currentDate.getDate();

      currentDate.setDate(++currentMonthDay);
    }

    tr.append(td);
    currentWeekday++;

    if (currentDate.getDay() === 0) {
      table.append(tr);

      currentWeekday = 0;
      tr = document.createElement("tr");
    }
  }

  if (tr.children.length) {
    for (let i = tr.children.length; i < 7; i++) {
      tr.append(document.createElement("td"));
    }
    table.append(tr);
  }

  container.append(table);
  return table;
}

function displayDate(date) {
  const dateToString = `${months[date.getMonth()]} ${date.getFullYear()}`;
  const dateElement = document.getElementById("date");
  
  dateElement.textContent = dateToString;
}

function updateCalendar() {
  table.remove();
  table = drawCalendar(calendar, date.getFullYear(), date.getMonth());

  displayDate(date);
}

const calendar = document.getElementById("calendar");
const date = new Date();

let table = drawCalendar(calendar, date.getFullYear(), date.getMonth());

displayDate(date);

next.addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  updateCalendar();
});

prev.addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  updateCalendar();
});
