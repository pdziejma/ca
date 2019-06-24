//function to make a delete button
function dButtonMaker(rowEl, rowi) {
    var deleteButton = document.createElement("input");
    deleteButton.setAttribute("class", "dltBtn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "Delete");
    deleteButton.setAttribute("id", "deleteButton" + rowi);
    deleteButton.addEventListener("click", delEvent);
    rowEl.appendChild(deleteButton);
}

//function to make an update button
function uButtonMaker(rowEl, rowi) {
    var updateButton = document.createElement("input");
    updateButton.setAttribute("class", "updBtn");
    updateButton.setAttribute("type", "button");
    updateButton.setAttribute("value", "Update");
    updateButton.setAttribute("id", "updateButton" + rowi);
    updateButton.addEventListener("click", updEvent);
    rowEl.appendChild(updateButton);
}

//making a table
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
for (let i = 0; i < getAnimals.length; i++) {
    row = table.insertRow(-1);
    row.setAttribute("id", "row" + i);
    var cell = row.insertCell(-1);
    cell.innerHTML = getAnimals[i].name;
    cell = row.insertCell(-1);
    cell.innerHTML = getAnimals[i].color;
    cell = row.insertCell(-1);
    cell.innerHTML = getAnimals[i].size;
    cell = row.insertCell(-1);
    cell.innerHTML = getAnimals[i].dob;

    //creating delete buttons
    dButtonMaker(row, i);

    //creating update buttons
    uButtonMaker(row, i);
}