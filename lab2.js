"use strict"

const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const input = document.getElementById("taskInput");
const button = document.getElementById("submitButton");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

// kosz
let $trash = "";

// widoczność list
let isChill = true;
let isImportant = true;
let isDeadline = true;

// mapa
let map = new Map();

// przycisk Submit
const submitTask = () => {

    if (input.value !== "") {
        
        // tworzenie elementu listy
        const item = document.createElement("li");
        item.innerHTML = `${input.value}`;
        item.setAttribute("id", `${input.value}`);
        item.setAttribute("ondblclick", `listItemClick(\"${input.value}\")`);
        item.setAttribute("class", "list-group-item");

        if (radio1.checked) {
            list1.appendChild(item);
            map.set(input.value, "list1");
        }
        else if (radio2.checked) {
            list2.appendChild(item);
            map.set(input.value, "list2");
        }
        else if (radio3.checked) {
            list3.appendChild(item);
            map.set(input.value, "list3");
        }
        
        //const deleteBtn = document.createElement("button");
        //deleteBtn.innerHTML = "X";
        //deleteBtn.style.margin = "0px 10px 0px 10px";
        //deleteBtn.setAttribute("onclick", `listItemDelete(\"${input.value}\")`);
        //deleteBtn.setAttribute("class", "btn btn-outline-danger btn-sm");
        //item.appendChild(deleteBtn);

        // tworzenie przycisku do elementu listy
        // jQuery
        $(item).append($('<button> X </button>').attr({
            style: 'margin: 0px 10px 0px 10px',
            onclick: `listItemDelete(\"${input.value}\")`,
            class: 'btn btn-outline-danger btn-sm'
        }));
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

    // jQuery
    $("#modal").toggle("slow");

    $("#modalOK").click(() => {

        // zapamiętanie w koszu
        $trash = name;

        // usunięcie gdy naciśnięty jest przycisk OK
        $('#' + name).remove(); 
    });

    // chowanie modala
    $("#modal").click(()=>{
        $("#modal").hide();
    });
}


// nasłuchiwanie cofnięcia usunięcia
// jQuery
$(document).keydown((e) => {

    if (e.which === 90 && e.ctrlKey && e.shiftKey) {
        return;
    }
    else if (e.which === 90 && e.ctrlKey) {  // ctrl + z
        
        if ($trash !== "") {

            // tworzenie jeszcze raz elementu z kosza
            var $item = $(`<li> ${$trash} </li>`).attr({
                id: `${$trash}`,
                ondblclick: `listItemClick(\"${$trash}\")`,
                class: 'list-group-item'
            });

            var $deleteBtn = $('<button> X </button>').attr({
                style: 'margin: 0px 10px 0px 10px',
                onclick: `listItemDelete(\"${$trash}\")`,
                class: 'btn btn-outline-danger btn-sm'
            });

            $($item).append($deleteBtn);
            $("#" + map.get($trash)).append($item);
            
            $trash = "";
        } 
    }          
}); 


header1.addEventListener('click', (e) => {
    
    let elements = list1.getElementsByTagName('li');

    if (isChill === true) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        isChill = false;
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "";
        }
        isChill = true;
    }
});


header2.addEventListener('click', (e) => {
    
    let elements = list2.getElementsByTagName('li');

    if (isImportant === true) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        isImportant = false;
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "";
        }
        isImportant = true;
    }
});


header3.addEventListener('click', (e) => {
    
    let elements = list3.getElementsByTagName('li');

    if (isDeadline === true) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        isDeadline = false;
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "";
        }
        isDeadline = true;
    }
});