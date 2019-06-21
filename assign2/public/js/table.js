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
    var deleteButton = document.createElement("input");
    deleteButton.setAttribute("class", "dltBtn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "Delete");
    deleteButton.setAttribute("id", "deleteButton" + i);
    row.appendChild(deleteButton);
}