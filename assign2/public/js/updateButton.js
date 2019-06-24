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
                let updName = document.getElementById("Name").value;
                let updColor = document.getElementById("Color").value;
                let updSize = document.getElementById("Size").value;
                let updDob = document.getElementById("Date of Birth").value;
                let updId = getAnimals[ind]._id;
                console.log(updName);
                console.log(updId);
                let data = {
                    '_id': updId,
                    'name': updName,
                    'color': updColor,
                    'size': updSize,
                    'dob': updDob
                }
                var updAnimal = JSON.stringify(data);
                //update database
                var xhttp = new XMLHttpRequest();
                xhttp.open("UPDATE", "http://localhost:3000/animals/" + updId, true);
                //always gonna be this type of data for this app
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send(updAnimal);

                //delete old row of textboxes

                //recreate/insert table row and fill with new data

                //update dropdown

                //update getAnimals
            });
        });
    }
}
        