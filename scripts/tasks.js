const completeButton = document.querySelectorAll(".c-btn");
const activityLog = document.getElementById("activity-log");
const clearButton = document.getElementById("clear-btn");
const currentDay = document.getElementById("current-day");
const currentDate = document.getElementById("current-date");
const themeButton = document.getElementById("theme-btn");
const body = document.body;
const bgColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-teal-500",
  "bg-lime-500",
  "bg-indigo-500",
  "bg-gray-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-rose-500",
  "bg-fuchsia-500",
  "bg-violet-500",
];

themeButton.addEventListener("click", function () {
  body.className = "";

  const randomColor = Math.floor(Math.random() * bgColors.length);
  body.classList.add(bgColors[randomColor]);
});

const now = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formattedDate = now.toLocaleDateString("en-US", options);

const [day, month, date, year] = formattedDate.split(" ");

currentDay.textContent = `${day}`;
currentDate.textContent = `${month} ${date} ${year}`;

for (const button of completeButton) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const cardBody = button.closest(".card-body");
    const cardTitle = cardBody.querySelector(".card-title").textContent;

    const now = new Date();
    const currentTime = now.toLocaleTimeString({
      hour: "2-digit",
      minute: "2-digit",
    });

    alert("Board updated successfully");

    const p = document.createElement("p");
    p.innerHTML = `
    <div class="my-5 p-3 text-left rounded-lg bg-gray-100 >
        <div class="text-sm">You have completed the task ${cardTitle} at ${currentTime}</div>
    </div>`;
    activityLog.appendChild(p);

    button.classList.remove("btn-primary");
    button.classList.add("btn-disabled");

    const totalTask = document.getElementById("total-task").innerText;
    const convertedAmount = parseInt(totalTask);
    const sum = convertedAmount + 1;
    document.getElementById("total-task").innerText = sum;

    const tasksCount = document.getElementById("tasks-count").innerText;
    const convertedCount = parseInt(tasksCount);
    const sub = convertedCount - 1;
    document.getElementById("tasks-count").innerText = sub;
  });
}

clearButton.addEventListener("click", function () {
  activityLog.innerHTML = "";
});
