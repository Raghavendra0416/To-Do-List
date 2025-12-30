//Add the data to the ul in the tasks Page
const ul = document.querySelector("#tasks-data");
const rawData = sessionStorage.getItem("tasks");
console.log("Before parsing: ", rawData);
console.log("TypeOf rawData: ", typeof rawData);

//parsing json rawData
const tasksList = JSON.parse(rawData);
console.log("after parsing: ", tasksList);
console.log("TypeOf tasksList: ", typeof tasksList);

//Adding all the elements in the tasks to ul
tasksList.forEach((taskVal, ind) => {
    const li = document.createElement("li");
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task-container");

    //Creating checkbox, task text, drop down options
    taskDiv.innerHTML = `
        <input type="checkbox" onchange="toggleStrike(this)">
        <span class="task-text">${taskVal}</span>
        <select>
        <option>Select</option>
        <option id="modify-task-${ind}">Modify Task</option>
        <option id="delete-task">Delete Task</option>
        </select>
        `;
    li.append(taskDiv);
    ul.append(li);
})


