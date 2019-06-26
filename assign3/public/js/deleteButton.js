// a function to remove an element from the document
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

//a function to delete
function delEvent() {
    let ind = this.id.replace(/\D+/g, '');
    let delName = getAnimals[ind].name;
    let delColor = getAnimals[ind].color;
    let delSize = getAnimals[ind].size;
    let delDob = getAnimals[ind].dob;
    let delId = getAnimals[ind]._id;
    let data = {
        '_id': delId,
        'name': delName,
        'color': delColor,
        'size': delSize,
        'dob': delDob
    }
    var delAnimal = JSON.stringify(data);
    //delete from database
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/animals/" + delId, true);
    //always gonna be this type of data for this app
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(delAnimal);

    //delete from dropdown
    removeElement("option" + ind);

    //delete from table
    removeElement("row" + ind);

    //adjust ids of list
    for (let j = parseInt(ind) + 1; j < getAnimals.length; j++) {
        //adjusts dropdown option value and id
        document.getElementById("option" + j).value = j-1;
        document.getElementById("option" + j).id = "option" + (j-1);
        //adjusts row id
        if (document.getElementById("row" + j) == null) {
            //if rows following are being updated
            //adjusts row id
            document.getElementById("newRow" + j).id = "newRow" + (j-1);
            //adjusts user input ids
            document.getElementById("Name" + j).id = "Name" + (j-1);
            document.getElementById("Color" + j).id = "Color" + (j-1);
            document.getElementById("Size" + j).id = "Size" + (j-1);
            document.getElementById("Date of Birth" + j).id = "Date of Birth" + (j-1);
            //adjusts submit button id
            document.getElementById("subButton" + j).id = "subButton" + (j-1);
        } else {
            //else if they are not being updated
            //adjusts row id
            document.getElementById("row" + j).id = "row" + (j-1);
            //adjusts deletebutton id
            document.getElementById("deleteButton" + j).id = "deleteButton" + (j-1);
            //adjusts update button id
            document.getElementById("updateButton" + j).id = "updateButton" + (j-1);
        }
    }

    //delete from getAnimals array
    getAnimals.splice(ind, 1);

    //update graph
}