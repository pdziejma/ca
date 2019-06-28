//replaces p1 with text for selected animal
function getDesc() {
    let ind = $('#select').prop('selectedIndex');
    $('#p1').html( 
    'The ' + animalArr[ind].name.toLowerCase() +
    ' is a ' + animalArr[ind].size.toLowerCase() +
    ' sized, ' + animalArr[ind].color.toLowerCase() + ' colored animal.');
}
//set up for dropdown
var option = '';
var newSelect = $('<select></select>');
newSelect.attr('id', 'select');
newSelect.attr('onchange', 'getDesc();');
$('#dynamicInput').append(newSelect);
//creation of animal options
for (let i = 0; i < animalArr.length; i++) {
    option += '<option id="option'+ i + '">' + animalArr[i].name + '</option>';
}
//appending to list
newSelect.append(option);