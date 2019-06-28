//function to make a button
function buttonMaker(rowEl, rowi, type) {
    var newButton = $('<input></input>')
    newButton.attr('type', 'button');
    rowEl.append(newButton);
    if (type == 'delete') {
        newButton.attr('id', 'deleteButton' + rowi);
        newButton.attr('class', 'dltBtn');
        newButton.attr('value', 'Delete');
        $('#deleteButton' + rowi).click(delEvent);
    } else if (type == 'update') {
        newButton.attr('id', 'updateButton' + rowi);
        newButton.attr('class', 'updBtn');
        newButton.attr('value', 'Update');
        $('#updateButton' + rowi).click(updEvent);
    } else {    //type == submit
        newButton.attr('id', 'submitButton' + rowi);
        newButton.attr('class', 'subBtn');
        newButton.attr('value', 'Submit');
        $('#submitButton' + rowi).click(subEvent);
    }
}

//making a table
const table = $('<table></table>');
table.attr('id', 'animTable');
$('#dynamicTable').html('');
$('#dynamicTable').append(table);

//setting up headers
const colHead = ['Name', 'Color', 'Size', 'Date of Birth']
const colCount = colHead.length;
//making new variables
var cell = $('<td></td>');
var row = $('<tr></tr>').appendTo($('#animTable'));
row.attr('id', 'hrow');
//putting headers in
for (let i = 0; i < colCount; i++) {
    row.append('<th>' + colHead[i] + '</th>');
}

//filling table with data
for (var i = 0; i < animalArr.length; i++) {
    row = $('<tr></tr>').appendTo($('#animTable'));
    row.attr('id', 'row' + i);
    let d = new Date(animalArr[i].dob);
    let displayDate = d.toLocaleDateString();
    row.append(
        '<td id = name' + i + '>' + animalArr[i].name +
        '</td><td id = color' + i + '>' + animalArr[i].color +
        '</td><td id = size' + i + '>' + animalArr[i].size +
        '</td><td id = dob' + i + '>' + displayDate + '</td>');
    //creating delete buttons
    buttonMaker($('#row' + i), i, 'delete');
    //creating update buttons
    buttonMaker($('#row' + i), i, 'update');

    //getting current row details
    currCells = [animalArr[i].name, animalArr[i].color, animalArr[i].size, displayDate];
    //new row for updating
    row = $('<tr></tr>').appendTo($('#animTable'));
    row.attr('id', 'newRow' + i);
    //hide row until button is pressed
    $('#newRow' + i).hide();

    //creating textboxes to update row and filling textboxes with correct ids and values
    for (let j = 0; j < colCount; j++) {
        let newInput = $('<input></input>');
        newInput.attr('id', 'new' + colHead[j] + i);
        newInput.val(currCells[j]); 
        let cell = $('<td></td>');
        cell.append(newInput);
        row.append(cell);
    }
    //creating submit update button
    buttonMaker($('#newRow' + i), i, 'submit');
}