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
    <i class="fa-solid fa-trash" title='trash'></i>
    </button>
    </div>
    `;
  }
};

// let addToDoButton = document.getElementById("addToDo");
// let toDoContainer = document.getElementById("toDoContainer");
// let inputField = document.getElementById("inputField");

// addToDoButton.addEventListener("click", function () {
//   var paragraph = document.createElement("p");
//   paragraph.classList.add("paragraph-styling");
//   paragraph.innerText = inputField.value;
//   toDoContainer.appendChild(paragraph);
//   inputField.value = "";
//   paragraph.addEventListener("click", function () {
//     paragraph.style.textDecoration = "line-through";
//   });
//   paragraph.addEventListener("dblclick", function () {
//     toDoContainer.removeChild(paragraph);
//   });
// });
