const completeButton = document.querySelectorAll(".c-btn");
const activityLog = document.getElementById("activity-log");
const clearButton = document.getElementById("clear-btn");

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
