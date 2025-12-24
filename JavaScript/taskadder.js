//Add the data to the ul in the tasks Page
const ul = document.querySelector("#tasks-data");
const rawData = sessionStorage.getItem("tasks");
console.log("Before parsing: ", rawData);
console.log(rawData[0]);

const tasksList = JSON.parse(rawData);
console.log("after parsing: ", tasksList);
const li = document.createElement("li");
li.innerText = tasksList[0];
console.log("li: ", li)
ul.append(li);
