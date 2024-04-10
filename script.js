const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Note: Read up on event listeners
listContainer.addEventListener("click",  function(e) { // When mouse click
    if (e.target.tagName === "LI") { // If click li (list item), check task (toggle)
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") { // If click xmark, delete li
        e.target.parentElement.remove();
        saveData();
    }
}, false ) 

showTask(); // display saved tasks

// Called by Add button
function addTask() {
    if (inputBox.value === "") {
        alert("Task cannot be empty!");
    }
    else {
        let newTask = document.createElement("li"); // li is tagname
        newTask.innerHTML = inputBox.value;
        listContainer.appendChild(newTask);

        // Add x on the right of new task as a span child of newTask
        let xmark = document.createElement("span");
        xmark.innerHTML = "\u00d7"; // xmark symbol
        newTask.appendChild(xmark);

        saveData();
    }
    inputBox.value = "";
}

// Save current listContainer to local storage as "data"
function saveData() { 
    localStorage.setItem("data", listContainer.innerHTML)
}
// Get information stored in "data"
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
