//a function that makes a form to update a row
function updEvent() {
    //finding current row
    var ind = this.id.replace(/\D+/g, '');
    var currCells = document.getElementById("row" + ind).cells;
    var row = table.insertRow(parseInt(ind) + 1);
    row.setAttribute("id", "newRow" + ind);
    //creating textboxes
    for (let i = 0; i < currCells.length; i++) {
        let preVal = currCells[i].innerHTML;
        let newInput = document.createElement("input");
        newInput.setAttribute("id", col_head[i] + ind);
        newInput.value = preVal;
        let cell = row.insertCell(-1);
        cell.appendChild(newInput);
    }
    //removing previous row
    removeElement("row" + ind);
    //creating update button
    var subButton = document.createElement("input");
    subButton.setAttribute("class", "subBtn");
    subButton.setAttribute("type", "button");
    subButton.setAttribute("value", "Submit");
    subButton.setAttribute("id", "subButton" + ind);
    row.appendChild(subButton);
    //event listener to submit the update changes
    subButton.addEventListener("click", submitUpdate);
}

//a function that updates the row with information given from form
function submitUpdate() {
    var ind = this.id.replace(/\D+/g, '');
    //pulling new values from inputs
    let updName = document.getElementById("Name" + ind).value;
    let updColor = document.getElementById("Color" + ind).value;
    let updSize = document.getElementById("Size" + ind).value;
    let updDob = document.getElementById("Date of Birth" + ind).value;
    //getting old id value to know which to update
    let updId = getAnimals[ind]._id;
    //making data object to send
    let data = {
        '_id': updId,
        'name': updName,
        'color': updColor,
        'size': updSize,
        'dob': updDob
    }
    //update database
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var updAnimal = data;
            //update getAnimals
            getAnimals.splice(ind, 1, updAnimal);
        }
    };
    xhttp2.open("PUT", "http://localhost:3000/animals/" + updId, true);
    //always gonna be this type of data for this app
    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.send(JSON.stringify(data));

    //delete old row of textboxes
    removeElement("newRow" + ind);
    //recreate/insert table row and fill with new data
    row = table.insertRow(parseInt(ind) + 1);
    row.setAttribute("id", "row" + ind);
    var cell = row.insertCell(-1);
    cell.innerHTML = updName;
    cell = row.insertCell(-1);
    cell.innerHTML = updColor;
    cell = row.insertCell(-1);
    cell.innerHTML = updSize;
    cell = row.insertCell(-1);
    cell.innerHTML = updDob;

    //adding a new delete button
    dButtonMaker(row, ind);

    //adding a new update button
    uButtonMaker(row, ind);

    //update dropdown
    let currAnm = document.getElementById("option" + ind);
    currAnm.innerHTML = updName;

    //update graph
}