console.log("Homework ToDo List");

//Selecting
const myList = document.querySelector(".myList"); 
const userInput = document.getElementById("text");

//Button
document.getElementById("plusButton").addEventListener("click",postData);

//Posting the id
fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            id:"lcsetri",
            todo: []
        })
    }).then(getData);


function handleFetchResponse(response) { 
    return response.json();
}
//Get Data
function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/lcsetri")
    .then(handleFetchResponse)
    .then(renderToDoList)
    .catch((error)=>{console.log('Error: ', error)});
}




//Post Data
function postData(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/lcsetri")
    .then(handleFetchResponse)
    .then(updateList)
    .then(updateJSON)
}

function updateList(response){
    let payload = response;
    
    
    if(userInput.value){
        let newObj = {
            checked: false,
            item: userInput.value
            }
        payload.todo.push(newObj);
        userInput.value="";
    } 
    return payload; 
}

//Update 
function updateJSON(newPayload) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/lcsetri', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newPayload)
    }).then(getData);
}


function renderToDoList(response){
    myList.innerHTML="";
    for (i of response.todo) {
        renderTask(i, response.todo.indexOf(i));
    } 

}
//Render
function renderTask(i,index){

    const div = document.createElement("div");
    div.setAttribute("id",index);
    div.classList.add("remain");

    const check = document.createElement("input");
    check.setAttribute("type","checkbox");
    check.addEventListener("change",onOff);

    const text = document.createElement("p");
    text.classList.add("paragraph");

    
    const trash = document.createElement("img");
    trash.classList.add('recycle-bin');
    trash.setAttribute("src","img/recycle-bin.png");
    trash.addEventListener('click', deleteTask);

    text.innerText = i.item;
    check.checked = i.checked;
    check.name = i.item;

    myList.appendChild(div);
    div.appendChild(check);
    div.appendChild(text);
    div.appendChild(trash);
    
    
}


function onOff(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/lcsetri")
    .then(handleFetchResponse)
    .then(updateTask)
}


function updateTask(response){
    let payload = response;
    let isChecked = document.querySelectorAll(":checked");
   
    for (const i of payload.todo) {
        i.checked = false;
    }
    
    for (const i of isChecked) {
        
        payload.todo[i.parentNode.id].checked = true;
    }
    updateJSON(payload);
}


function deleteTask(){
    this.parentNode.remove(); 
    fetch("https://simple-json-server-scit.herokuapp.com/todo/lcsetri")
    .then(handleFetchResponse)
    .then(removeResponse)
}


function removeResponse(response){
    let payload = response;
    let Array =[];
    let remain = document.querySelectorAll(".remain");
    for (const i of remain) {
        Array.push(payload.todo[i.id]);
        }
    payload.todo = Array.reverse();
    updateJSON(payload);
}