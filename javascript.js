
let newtask = document.querySelector('.createTask');
let addButton = document.querySelector('.addButton');
let tasks = document.querySelector('.addedTasks');
let error = document.querySelector('#errorModal');
let okButton = document.querySelector(".agree");




addButton.addEventListener('click', () => {
    if(!newtask.value.length) {
        error.classList.add("errorOpen");
       
    } else {
        tasks.innerHTML +=
        `<div class="task">
            <span id="taskname">${newtask.value}</span>
            <button class="deleteTask">
                <span class="material-symbols-outlined"> delete </span>
            </button>
        </div>
        <hr>`

        newtask.value = "";
    }
});

okButton.addEventListener('click', () => {
    error.classList.remove("errorOpen");
  }); 



