// a function to remove an element from the document
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

//a function to add the eventlistener to all delete buttons
function addEvent() {
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
            //delete from database
            var xhttp = new XMLHttpRequest();
            xhttp.open("DELETE", "http://localhost:3000/animals/" + delId, true);
            //always gonna be this type of data for this app
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));

            //delete from dropdown
            removeElement("option" + i);

            //delete from table
            removeElement("row" + i);
            
            //updating getAnimals variable? seems wrong to me to do this everytime there is a change    
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    getAnimals = JSON.parse(this.responseText);
                }
            };
            xhttp.open("GET", '/animals', false);
            xhttp.send();
        });
    }
}
//adds eventlistener to all buttons
window.addEventListener("load", function() {
    addEvent();
});
