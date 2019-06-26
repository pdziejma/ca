//replaces p1 with text for selected animal
function getDesc() {
    var sel = document.getElementById('select');
    var ind1 = sel.options[sel.selectedIndex].value;
    if (ind1 == -1) {
        document.getElementById('p1').innerHTML = 'Select an animal to see its description.';
    }
    else {
        document.getElementById('p1').innerHTML =
        'The ' + getAnimals[ind1].name.toLowerCase() +
        ' is a ' + getAnimals[ind1].size.toLowerCase() +
        ' sized, ' + getAnimals[ind1].color.toLowerCase() + ' colored animal.';
    }
}
//set up for dropdown
var option, txt;
var newSelect = document.createElement('select');
var dyInput = document.getElementById('dynamicInput');
dyInput.appendChild(newSelect);
newSelect.setAttribute('id', 'select');
newSelect.setAttribute('onchange', 'getDesc();');
//creation of animal options
for (let i = 0; i < getAnimals.length; i++) {
    option = document.createElement('option');
    txt = document.createTextNode(getAnimals[i].name);
    option.appendChild(txt);
    option.setAttribute('id', 'option' + i);
    option.setAttribute('value', i);
    newSelect.insertBefore(option, newSelect.lastChild);
}