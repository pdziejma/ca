// a function to remove an element from the document
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

//a function to add the eventlistener to all delete buttons
function addDelEvent() {
    var bns = document.getElementsByClassName("dltBtn");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
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
    }
}
//adds eventlistener to all buttons
window.addEventListener("load", function() {
    addDelEvent();
    addUpdEvent();
});
