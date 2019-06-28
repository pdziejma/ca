//makes the inputs and buttons of the form
//name input
const nameInput = $('<input></input>');
nameInput.attr('placeholder', 'Name');
nameInput.attr('type', 'text');
$('#animalAddForm').append(nameInput);
//color input
const colorInput = $('<input></input>');
colorInput.attr('placeholder', 'Color');
colorInput.attr('type', 'text');
$('#animalAddForm').append(colorInput);
//size input
const sizeInput = $('<input></input>');
sizeInput.attr('placeholder', 'Size');
sizeInput.attr('type', 'text');
$('#animalAddForm').append(sizeInput);
//date of birth input   
const dobInput = $('<input></input>');
dobInput.attr('placeholder', 'Date of Birth');
dobInput.attr('type', 'text');
$('#animalAddForm').append(dobInput);
//submit button input
const addButton = $('<input></input>');
addButton.attr('id', 'addButton');
addButton.attr('type', 'button');
addButton.attr('value', 'Submit');
$('#animalAddForm').append(addButton);

//event listener for form with jquery
$('#addButton').click(function() {
    //variables for form values
    var newName = nameInput.val();
    let newColor = colorInput.val();
    let newSize = sizeInput.val();
    let newDob = dobInput.val();
    //json object following model
    let data = {
        'name': newName,
        'color': newColor,
        'size': newSize,
        'dob': newDob
    }
    //adding it to the database with jquery
    $.post('http://localhost:3000/animals/', data, function (data) {
        //adding to animalArr array
        animalArr.push(data);
    }, 'JSON');

    //id for all additional elements
    var currId = animalArr.length;

    //adding it to the drop down list
    option = $('<option id =option' + currId + '>' + newName + '</option>');
    $('#select').append(option);
    //FIX: with jquery
    //adding it to the table
    row = $('<tr></tr>').appendTo($('#animTable'));
    row.attr('id', 'row' + currId);
    let d = new Date(newDob);
    let displayDate = d.toLocaleDateString();
    row.append(
        '<td id = name' + i + '>' + newName +
        '</td><td id = color' + i + '>' + newColor +
        '</td><td id = size' + i + '>' + newSize +
        '</td><td id = dob' + i + '>' + displayDate + '</td>');

    //adding a new delete button
    buttonMaker($('#row' + currId), currId, 'delete');

    //adding a new update button
    buttonMaker($('#row' + currId), currId, 'update');

    //saving info from new cells
    var currCells = [newName, newColor, newSize, displayDate];

    //new row for updating
    row = $('<tr></tr>').appendTo($('#animTable'));
    row.attr('id', 'newRow' + currId);
    //hide row until button is pressed
    $('#newRow' + currId).hide();

    //creating text boxes to update row
    for (let j = 0; j < colCount; j++) {
        let newInput = $('<input type = "text"></input>');
        newInput.attr('id', 'new' + colHead[j] + currId);
        newInput.val(currCells[j]);
        let cell = $('<td></td>');
        cell.append(newInput);
        row.append(cell);
    }
    //creating submit update button
    buttonMaker($('#newRow' + currId), currId, 'submit');
});