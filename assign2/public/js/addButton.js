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
    var deleteButton = document.createElement("input");
    deleteButton.setAttribute("class", "dltBtn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "Delete");
    deleteButton.setAttribute("id", "deleteButton" + currId);

    //call function for delete to add event listener to new delete button
    deleteButton.addEventListener("click", function() {
        let ind = this.id.replace(/\D+/g, '');
        let delName = getAnimals[ind].name;
        let delColor = getAnimals[ind].color;
        let delSize = getAnimals[ind].size;
        let delDob = getAnimals[ind].dob;
        let delId = getAnimals[ind]._id;
        let data = {
            'name': delName,
            'color': delColor,
            'size': delSize,
            'dob': delDob
        }
        var delAnimal = JSON.stringify(data);
        //delete from database
        var xhttp2 = new XMLHttpRequest();
        xhttp2.open("DELETE", "http://localhost:3000/animals/" + delId, true);
        //always gonna be this type of data for this app
        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.send(delAnimal);

        //delete from dropdown
        removeElement("option" + ind);
        //delete from table
        removeElement("row" + ind);

        //adjust ids of list
        for (let j = parseInt(ind) + 1; j < getAnimals.length; j++) {
            //adjusts dropdown option id
            document.getElementById("option" + j).id = "option" + (j-1);
            //adjusts row id
            document.getElementById("row" + j).id = "row" + (j-1);
            //adjusts deletebutton id
            document.getElementById("deleteButton" + j).id = "deleteButton" + (j-1);
        }
        //delete from getAnimals array
        getAnimals.splice(ind, 1);
    });
    row.appendChild(deleteButton);
});