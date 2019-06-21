//FIX: Something with adding and deleting animals is not working. I am updating getAnimals a lot, which I think is wrong.

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

    //updating getAnimals variable? seems wrong to me to do this everytime there is a change
    var xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getAnimals = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", '/animals', false);
    xhttp.send();


    //json object following model
    let data = {
        'name': newName,
        'color': newColor,
        'size': newSize,
        'dob': newDob
    }
    //adding it to the database
    xhttp.open("POST", "http://localhost:3000/animals/", true);
    //always gonna be this type of data for this app
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));

    //adding it to the drop down list
    option = document.createElement("option");
    txt = document.createTextNode(newName);
    option.appendChild(txt);
    option.setAttribute("id", "option" + getAnimals.length);
    newSelect.insertBefore(option, newSelect.lastChild);

    //adding it to the table
    row = table.insertRow(-1);
    row.setAttribute("id", "row" + getAnimals.length);
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
    deleteButton.setAttribute("id", "deleteButton" + getAnimals.length);

    //updating getAnimals variable? seems wrong to me to do this everytime there is a change    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getAnimals = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", '/animals', false);
    xhttp.send();

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
        //delete from database
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "http://localhost:3000/animals/" + delId, true);
        //always gonna be this type of data for this app
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));

        //delete from dropdown
        console.log(getAnimals.length - 1);
        removeElement("option" + (getAnimals.length - 1));

        //delete from table
        removeElement("row" + (getAnimals.length - 1));

        //updating getAnimals variable? seems wrong to me to do this everytime there is a change    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                getAnimals = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", '/animals', false);
        xhttp.send();
    });
    row.appendChild(deleteButton);
});