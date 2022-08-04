document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length === 0) {
    alert("Please eneter a task!");
  } else {
    document.querySelector("#tasks").innerHTML += 
    `
    <div class='task'>
     <span id='taskName'>
       ${document.querySelector("#newTask input").value}
     </span>
    <button class='delete'>
    X
    </button>
    </div>
    `;

    let currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let tasks = document.querySelectorAll(".tasks");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newTask input").value = "";
  }
};
