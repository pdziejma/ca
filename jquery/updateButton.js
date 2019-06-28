//a function that shows the form to update a row
function updEvent() {
    //finding current row
    var ind = this.id.replace(/\D+/g, '');
    //hiding row to be updated and showing textboxes
    $('#newRow' + ind).show()
    $('#row' + ind).hide();
}

//a function that updates the row with information given from form
function subEvent() {
    var ind = this.id.replace(/\D+/g, '');
    //pulling new values from inputs
    let updName = $('#newName' + ind).val();
    let updColor = $('#newColor' + ind).val();
    let updSize = $('#newSize' + ind).val();
    let updDob = $('newDate of Birth' + ind).val();
    //getting old id value to know which to update
    let updId = animalArr[ind]._id;
    //making data object to send
    let data = {
        '_id': updId,
        'name': updName,
        'color': updColor,
        'size': updSize,
        'dob': updDob
    }
    //update database with jquery
    $.ajax({
        url: 'http://localhost:3000/animals/' + updId,
        type: 'PUT',
        datatype: 'JSON',
        data: data
    });
    //updating animalArr array
    animalArr.splice(ind, 1, data);
    //hide row of textboxes
    $('#newRow' + ind).hide();
    //show table row and update with new data
    $('#name' + ind).html(updName);
    $('#color' + ind).html(updColor);
    $('#size' + ind).html(updSize);
    $('#dob' + ind).html(updDob);
    $('#row' + ind).show();
    //update dropdown
    $('#option' + ind).html(updName);
}