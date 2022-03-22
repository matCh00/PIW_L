"use strict"

const list = document.getElementById("todoList");
const input = document.getElementById("taskInput");
const button = document.getElementById("submitButton");


// przycisk Submit
const submitTask = () => {

    if (input.value !== "") {
        
        // tworzenie elementu listy
        const item = document.createElement("li");
        item.innerHTML = `${input.value}`;
        item.setAttribute("id", `${input.value}`);
        item.setAttribute("ondblclick", `listItemClick(\"${input.value}\")`);
        item.setAttribute("class", "list-group-item");
        item.onselectstart = () => {return false;}
        list.appendChild(item);
      
        //const deleteBtn = document.createElement("button");
        //deleteBtn.innerHTML = "X";
        //deleteBtn.style.margin = "0px 10px 0px 10px";
        //deleteBtn.setAttribute("onclick", `listItemDelete(\"${input.value}\")`);
        //deleteBtn.setAttribute("class", "btn btn-outline-danger btn-sm");
        //item.appendChild(deleteBtn);

        // tworzenie przycisku do elementu listy
        // jQuery
        $('<button> X </button>').attr({
            style: 'margin: 0px 10px 0px 10px',
            onclick: `listItemDelete(\"${input.value}\")`,
            class: 'btn btn-outline-danger btn-sm'
        }).appendTo(item);
    }
    else {
        console.log("input is empty");
    }

    // wyczyszczony input
    document.getElementById("taskInput").value = "";
}


// element listy
const listItemClick = (name) => {
    
    const currentTask = document.getElementById(`${name}`);

    if (currentTask === null) { 
        return; 
    }

    // dodanie przekreślenia
    if (currentTask.style.textDecoration != 'line-through') {
        currentTask.style.textDecoration = 'line-through';
        currentTask.style.color = 'grey';

        // data naciśnięcia
        const date = new Date(Date.now());
        currentTask.innerHTML += `  ${
            (date.getMonth()+1).toString().padStart(2, '0')}/${
            date.getDate().toString().padStart(2, '0')}/${
            date.getFullYear().toString().padStart(4, '0')} ${
            date.getHours().toString().padStart(2, '0')}:${
            date.getMinutes().toString().padStart(2, '0')}:${
            date.getSeconds().toString().padStart(2, '0')}`;
    } 
    // usunięcie przekreślenia
    else {
        currentTask.style.textDecoration = '';
        currentTask.style.color = 'black';
        currentTask.innerHTML = currentTask.innerHTML.slice(0, -20);
    }
}


// przycisk na elemencie listy
const listItemDelete = (name) => {

    //document.getElementById(`${name}`).remove();

    // jQuery
    $("#modal").toggle("slow");

    $("#modalOK").click(() => {

        // usunięcie gdy naciśnięty jest przycisk OK
        $('#' + name).remove();
    });

    // chowanie modala
    $("#modal").click(()=>{
        $("#modal").hide();
    });
}