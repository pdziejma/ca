//a function that shows the form to update a row
function updEvent() {
    //finding current row
    var ind = this.id.replace( /\D+/g, '' );
    //hiding row to be updated and showing textboxes
    $( '.update' + ind ).show();
    $( '.display' + ind ).hide();
}

//a function that updates the row with information given from form
function subEvent() {
    var ind = this.id.replace( /\D+/g, '' );
    //pulling new values from inputs
    let updName = $( '#newName' + ind ).val();
    let updColor = $( '#newColor' + ind ).val();
    let updSize = $( '#newSize' + ind ).val();
    let updDob = $( 'newDob' + ind ).val();
    //getting old id value to know which to update
    let updId = animalArr[ ind ]._id;
    //making data object to send
    let data = {
        '_id' : updId,
        'name' : updName,
        'color' : updColor,
        'size' : updSize,
        'dob' : updDob
    }
    //update database with jquery
    $.ajax({
        url : 'http://localhost:3000/animals/' + updId,
        type : 'PUT',
        datatype : 'JSON',
        data : data
    });
    //updating animalArr array
    animalArr.splice( ind, 1, data );

    //show table row and update with new data
    $( '#Name' + ind ).text( updName );
    $( '#Color' + ind ).text( updColor );
    $( '#Size' + ind ).text( updSize );
    $( '#Dob' + ind ).text( updDob );

    //hiding and showing appropriate row values
    $( '.update' + ind ).hide();
    $( '.display' + ind ).show();

    //update dropdown
    $( '#option' + ind ).html( updName );
}