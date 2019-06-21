//getting the animals, might need to change back to other way
/*
var getAnimals;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getAnimals = JSON.parse(this.responseText);
    }
};
xhttp.open("GET", '/animals', false);
xhttp.send();
*/
//replaces p1 with text for selected animal
function getDesc() {
    const sel = document.getElementById("select");
    const ind = sel.options[sel.selectedIndex].value;
    if (ind == -1) {
        document.getElementById("p1").innerHTML = "Select an animal to see its description.";
    }
    else {
        document.getElementById("p1").innerHTML =
        "The " + getAnimals[ind].name.toLowerCase() +
        " is a " + getAnimals[ind].size.toLowerCase() +
        " sized, " + getAnimals[ind].color.toLowerCase() + " colored animal.";
    }
}
//set up for dropdown
var option, txt;
var newSelect = document.createElement("select");
var dyInput = document.getElementById("dynamicInput");
dyInput.appendChild(newSelect);
newSelect.setAttribute("id", "select");
newSelect.setAttribute("onchange", "getDesc();");
//creation of animal options
for (let i = 0; i < getAnimals.length; i++) {
    option = document.createElement("option");
    txt = document.createTextNode(getAnimals[i].name);
    option.appendChild(txt);
    option.setAttribute("id", "option" + i);
    newSelect.insertBefore(option, newSelect.lastChild);
}