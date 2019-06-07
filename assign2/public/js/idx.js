let option;
let txt;
let sel = document.getElementById("animalSel"); 
//creation of animal options
for (let i = 0; i < get_animals.length; i++) {
    option = document.createElement("option");
    txt = document.createTextNode(get_animals[i].Name);
    option.appendChild(txt);
    option.setAttribute("value", i);
    sel.insertBefore(option, sel.lastChild);
}