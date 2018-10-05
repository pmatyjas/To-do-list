document.addEventListener("DOMContentLoaded", function () {

  var task = document.querySelector("#taskInput");
  var buttonAdd = document.querySelector("#addTaskButton");
  var taskList = document.querySelector("#taskList");
  var buttonRemoveAll = document.querySelector("#removeFinishedTasksButton");
  var counterBox = document.createElement("div");
  counterBox.classList.add("counter");
  counterBox.innerText = "You have " + 0 + " task to do";
  var container = document.querySelector(".container");
  container.insertBefore(counterBox, task);
  var counter = 0;


  buttonAdd.addEventListener("click", function addTask() {

    if (task.value.length > 5 && task.value.length < 100) {

      var li = document.createElement("li");
      li.classList.add("listElement");
      var taskName = document.createElement("h1");
      var buttonDelete = document.createElement("button");
      var buttonComplete = document.createElement("button");
      buttonDelete.innerText = "Delete";
      buttonDelete.classList.add("button_delete");
      buttonComplete.innerText = "Complete";
      buttonComplete.classList.add("button_complete");

      taskList.appendChild(li);
      li.appendChild(taskName);
      taskName.innerText = task.value;
      li.appendChild(buttonDelete);
      li.appendChild(buttonComplete);
      task.value = '';

      counter += 1;
      counterBox.innerText = "You have " + counter + " task to do";

      buttonDelete.addEventListener("click", function () {
        taskList.removeChild(li);
        counter -= 1;
        counterBox.innerText = "You have " + counter + " task to do";
      });

      buttonComplete.addEventListener("click", function () {
          li.classList.toggle("completed");
        }
      );

      buttonRemoveAll.addEventListener("click", function () {
        var completedTask = document.querySelectorAll(".completed");
        for (var i = 0; i < completedTask.length; i++) {
          completedTask[i].parentElement.removeChild(completedTask[i]);
          counter -= 1;
          counterBox.innerText = "You have " + counter + " task to do";
        }
      });
    } else {
      alert("Use at least 6 letters");
    }
  });
});
