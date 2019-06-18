var get_animals;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        get_animals = JSON.parse(this.responseText);
    }
};
xhttp.open("GET", '/animals', false);
xhttp.send();

//replaces p1 with text for selected animal
function getDesc() {
    const sel = document.getElementById("select");
    const ind = sel.options[sel.selectedIndex].value;
    if (ind == -1) {
        document.getElementById("p1").innerHTML = "Choose an animal to see its description.";
    }
    else {
        document.getElementById("p1").innerHTML =
        "The " + get_animals[ind].name.toLowerCase() +
        " is a " + get_animals[ind].size.toLowerCase() +
        " sized, " + get_animals[ind].color.toLowerCase() + " colored animal.";
    }
}
//set up for dropdown
let option, txt;
const newSelect = document.createElement("select");
const dyInput = document.getElementById("dynamicInput");
dyInput.appendChild(newSelect);
newSelect.setAttribute("id", "select");
newSelect.setAttribute("onchange", "getDesc();");
//creation of animal options
for (let i = 0; i < get_animals.length; i++) {
    option = document.createElement("option");
    txt = document.createTextNode(get_animals[i].name);
    option.appendChild(txt);
    option.setAttribute("value", i);
    newSelect.insertBefore(option, newSelect.lastChild);
}

//making a table
var animal_arr = new Array();
const table = document.createElement("TABLE");
table.border = "1";
table.setAttribute("id", "animTable");
const dyTable = document.getElementById("dynamicTable");
dyTable.innerHTML = "";
dyTable.appendChild(table);

//setting up headers
const col_head = ["Name", "Color", "Size", "Date of Birth"]
const col_count = col_head.length;
//adding the header row
var row = table.insertRow(-1);
//putting headers in
for (let i = 0; i < col_count; i++) {
    var head_cell = document.createElement("TH");
    head_cell.innerHTML = col_head[i];
    row.appendChild(head_cell);
}
//filling table with data
for (let i = 0; i < get_animals.length; i++) {
    row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = get_animals[i].name;
    cell = row.insertCell(-1);
    cell.innerHTML = get_animals[i].color;
    cell = row.insertCell(-1);
    cell.innerHTML = get_animals[i].size;
    cell = row.insertCell(-1);
    cell.innerHTML = get_animals[i].dob;
}

//event listener for form
document.getElementById("submit btn").addEventListener("click", addAnimal());

//adding to db
function addAnimal() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("pid").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "/animals", true);
    xhttp.send();
}