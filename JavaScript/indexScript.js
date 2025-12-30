// Will get the User Entered Value(task)
const taskInp = document.getElementById('task-inp');
document.getElementById("addTask-button").addEventListener("click", function () {
    console.log("Button Clicked!")
    //If no value is entered then return alert
    if (taskInp.value === "") return alert("Please Enter a Task");

    //Check if there are any tasks present and add the current task to the list.
    let tasks = JSON.parse(sessionStorage.getItem("tasks") || "[]");
    console.log('Existing tasks:', tasks);
    tasks.push(taskInp.value);
    console.log("TaskInp: ", taskInp.value);
    console.log("Tasks", tasks);

    //Storing data in the browser. But if the tab closed then the data will also be deleted.
    //Creating a session storage with name tasks and adding the tasks array to it.
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Task Added!");
    alert("Task Got Added");

    //Redirect the page to another page.
    window.location.href = "Pages/tasksPage.html";
    taskInp.value = ''; //Clear the content of the input box.
});