//makes the inputs and buttons of the form
const addForm = document.getElementById("animalAddForm");
const nameInput = document.createElement("input");
addForm.appendChild(nameInput);
const colorInput = document.createElement("input");
addForm.appendChild(colorInput);
const sizeInput = document.createElement("input");
addForm.appendChild(sizeInput);
const dobInput = document.createElement("input");
addForm.appendChild(dobInput);
const addButton = document.createElement("button");
addButton.setAttribute("type", "button");
addButton.setAttribute("id", "addButton");
addButton.innerHTML = "Submit";
addForm.appendChild(addButton);

//event listener for form
document.getElementById('addButton').addEventListener('click', function() {
    //variables for form values
    let formElements = document.getElementById("animalAddForm").elements;
    var newName = formElements[0].value;
    let newColor = formElements[1].value;
    let newSize = formElements[2].value;
    let newDob = formElements[3].value;
    //json object following model
    let data = {
        'name': newName,
        'color': newColor,
        'size': newSize,
        'dob': newDob
    }
    //adding it to the database
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var newAnimal = JSON.parse(this.response);
            getAnimals.push(newAnimal);
        }
    };

    xhttp1.open("POST", "http://localhost:3000/animals/", true);
    //always gonna be this type of data for this app
    xhttp1.setRequestHeader("Content-type", "application/json");
    xhttp1.send(JSON.stringify(data));

    //id for all additional elements
    var currId = getAnimals.length;

    //adding it to the drop down list
    option = document.createElement("option");
    txt = document.createTextNode(newName);
    option.appendChild(txt);
    option.setAttribute("id", "option" + currId);
    option.setAttribute("value", currId);
    newSelect.insertBefore(option, newSelect.lastChild);

    //adding it to the table
    row = table.insertRow(-1);
    row.setAttribute("id", "row" + currId);
    var cell = row.insertCell(-1);
    cell.innerHTML = newName;
    cell = row.insertCell(-1);
    cell.innerHTML = newColor;
    cell = row.insertCell(-1);
    cell.innerHTML = newSize;
    cell = row.insertCell(-1);
    cell.innerHTML = newDob;

    //adding a new delete button
    dButtonMaker(row, currId);

    //adding a new update button
    uButtonMaker(row,currId);
});