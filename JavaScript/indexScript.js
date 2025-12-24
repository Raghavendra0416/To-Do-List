// Will get the User Entered Value
const taskInp = document.getElementById('task-inp');
let task = "";
document.getElementById("addTask-button").addEventListener("click", function () {
    task = taskInp.value;
    console.log(task);

});