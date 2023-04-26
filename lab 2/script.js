"use strict";

const todoList = document.querySelector(".todo-list");
const trashList = document.querySelector("#trash-list");
const btnAdd = document.querySelector(".add-btn");
const inputField = document.querySelector(".input-field");



// new task
btnAdd.addEventListener("click", function () {
  const inputValue = inputField.value;

  if (inputValue === "") {
    alert("Task is empty!");
  } else {
    const listEl = document.createElement("li");
    const task = document.createElement("span");
    task.textContent = inputValue;
    listEl.appendChild(task);

    listEl.classList.add("task");
    task.classList.add("task-text");

    const btnX = document.createElement("button");
    btnX.classList.add("remove-button");
    btnX.classList.add("small-btn");
    btnX.textContent = 'X'
    listEl.prepend(btnX);

    todoList.appendChild(listEl);
    inputField.value = "";

    // delete task
    $(".remove-button")
      .off()
      .click(function () {
        const listItem = $(this).parent();


        // modal are u sure?
        $("#modal-window").removeClass("hidden");
        $("#overlay").removeClass("hidden");

        // yes
        $("#yes-btn")
          .off()
          .click(function () {
            $("#modal-window").addClass("hidden");
            $("#overlay").addClass("hidden");

            btnX.classList.remove("remove-button");
            btnX.textContent = ""
            $("#trash-list").append(listItem[0].cloneNode(true));
            listItem.remove();

          });

        // no remove
        $("#no-btn").click(function () {
          $("#modal-window").addClass("hidden");
          $("#overlay").addClass("hidden");
        });
      });
  }
});

// task completed
todoList.addEventListener("click", function (event) {
  const clickedTask = event.target;
  const currentDate = new Date();
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
  let month = months[currentDate.getMonth()];

  const dateOfTask =
    +currentDate.getDate() +
    " " +
    month +
    " " +
    currentDate.getFullYear() +
    ", " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes();

  if (clickedTask.classList.contains("task")) {
    if (!clickedTask.classList.contains("task--done")) {
      clickedTask.classList.add("task--done");

      clickedTask.querySelector(".task-text").classList.add("task-text--done");

      const dateEl = document.createElement("span");
      dateEl.classList.add("date");
      dateEl.textContent = dateOfTask;

      clickedTask.appendChild(dateEl);
    } else {
      clickedTask.classList.remove("task--done");
      clickedTask
        .querySelector(".task-text")
        .classList.remove("task-text--done");

      clickedTask.removeChild(clickedTask.querySelector(".date"));
    }
  }
});
