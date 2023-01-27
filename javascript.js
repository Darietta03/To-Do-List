
let newtask = document.querySelector('.createTask');
let addButton = document.querySelector('.addButton');
let tasks = document.querySelector('.addedTasks');

addButton.addEventListener('click', addToList);

function addToList() {
    if(newtask.value.length < 1) {
        
    } else {
        tasks.innerHTML +=
        `<div class="task">
            <span id=""taskname>${newtask.value}</span>
            <button class="deleteTask">
            <span class="material-symbols-outlined">
delete
</span>
            </button>
        </div>
        <hr>`
    }

}
