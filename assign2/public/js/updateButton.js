//a function to add the eventlistener to all update buttons
function addUpdEvent() {
    var bns = document.getElementsByClassName("updBtn");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            //finding current row
            var ind = this.id.replace(/\D+/g, '');
            var currCells = document.getElementById("row" + ind).cells;
            var row = table.insertRow(parseInt(ind) + 1);
            //creating textboxes
            for (let i = 0; i < currCells.length; i++) {
                let preVal = currCells[i].innerHTML;
                let newInput = document.createElement("input");
                newInput.setAttribute("id", col_head[i]);
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
            subButton.addEventListener("click", function() {
                //pulling new values from inputs
                let updName = document.getElementById("Name").value;
                let updColor = document.getElementById("Color").value;
                let updSize = document.getElementById("Size").value;
                let updDob = document.getElementById("Date of Birth").value;
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
                        var updAnimal = JSON.parse(this.response);
                        getAnimals.splice(ind, 1, updAnimal);
                    }
                };
                xhttp2.open("UPDATE", "http://localhost:3000/animals/" + updId, true);
                //always gonna be this type of data for this app
                xhttp2.setRequestHeader("Content-type", "application/json");
                xhttp2.send(JSON.stringify(data));

                //delete old row of textboxes

                //recreate/insert table row and fill with new data

                //update dropdown

                //update getAnimals
            });
        });
    }
}