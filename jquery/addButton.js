//makes the inputs and buttons of the form
//name input
const nameInput = $( '<input></input>' )
    .attr( 'placeholder', 'Name' )
    .attr( 'type', 'text' )
    .appendTo( $( '#animalAddForm' ) );
//color input
const colorInput = $( '<input></input>' )
    .attr( 'placeholder', 'Color' )
    .attr( 'type', 'text' )
    .appendTo( $( '#animalAddForm' ) );
//size input
const sizeInput = $( '<input></input>' )
    .attr( 'placeholder', 'Size' )
    .attr( 'type', 'text' )
    .appendTo( $( '#animalAddForm' ) );
//Dob input
const dobInput = $( '<input></input>' )
    .attr( 'placeholder', 'Dob' )
    .attr( 'type', 'text' )
    .appendTo( $( '#animalAddForm' ) );
//submit button input
const addButton = $( '<input></input>' )
    .attr( 'id', 'addButton' )
    .attr( 'type', 'button' )
    .attr( 'value', 'Submit' )
    .appendTo( $( '#animalAddForm' ) );

//event listener for form with jquery
$( '#addButton' ).click( function() {
    //variables for form values
    var newName = nameInput.val();
    let newColor = colorInput.val();
    let newSize = sizeInput.val();
    let newDob = dobInput.val();
    //json object following model
    let data = {
        'name' : newName,
        'color' : newColor,
        'size' : newSize,
        'dob' : newDob
    }
    //adding it to the database with jquery
    $.post( 'http://localhost:3000/animals/', data, function ( data ) {
        //adding to animalArr array
        animalArr.push( data );
    }, 'JSON' );

    //id for all additional elements
    var currId = animalArr.length;

    //adding it to the drop down list
    option = $( '<option></option>' )
        .attr( 'id', 'option' + currId )
        .appendTo( $( '#select' ) )
        .html( newName );

    //display date for table
    let displayDate = new Date( newDob ).toLocaleDateString();
    //storing row details
    let currCells = [ newName, newColor, newSize, displayDate ];
    
    //creating new table row
    let row = $( '<tr></tr>' )
        .attr( 'id', 'row' + currId )
        .appendTo( $( '#animTable' ) );

    //filling table row
    for ( let j = 0; j < colCount; j++ ) {

        //new update boxes
        $( '<input></input>' )
            .attr( 'id', 'new' + colHead[ j ] + currId )
            .attr( 'class', 'update' + currId )
            .val( currCells[ j ] )
            .appendTo( row )
            .hide();

        //new display information
        $( '<td></td>' )
            .attr( 'id', colHead[ j ] + currId )
            .attr( 'class', 'display' + currId )
            .text( currCells[ j ] )
            .appendTo( row );
    }

    //adding a new delete button
    buttonMaker( $( '#row' + currId), currId, 'delete' );

    //adding a new update button
    buttonMaker( $( '#row' + currId), currId, 'update' );

    //creating submit update button
    buttonMaker( $ ( '#row' + currId ), currId, 'submit' );

});