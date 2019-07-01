//function to make a button
function buttonMaker( rowEl, rowi, type ) {
    var newButton = $( '<input type = button></input>' )
        .appendTo( rowEl );
    //making correct button based on type
    if ( type == 'delete' ) {
        newButton
            .attr( 'id', 'deleteButton' + rowi )
            .attr( 'class', 'display' + rowi )
            .attr( 'value', 'Delete' )
            .click( delEvent );
    } else if ( type == 'update' ) {
        newButton
            .attr( 'id', 'updateButton' + rowi )
            .attr( 'class', 'display' + rowi )
            .attr( 'value', 'Update' )
            .click( updEvent );
    } else {    //type == submit
        newButton
            .attr( 'id', 'submitButton' + rowi )
            .attr( 'class', 'update' + rowi )
            .attr( 'value', 'Submit' )
            .click( subEvent )
            .hide();
    }
}

//making a table
const table = $( '<table id = animTable></table>' );
$( '#dynamicTable' )
    .html( '' )
    .append( table );
//setting up headers
const colHead = [ 'Name', 'Color', 'Size', 'Dob' ]
const colCount = colHead.length;
//making new rows
var row = $( '<tr></tr>' )
    .appendTo( $( '#animTable' ) )
    .attr( 'id', 'headerRow' );

//putting headers in
for ( let i = 0; i < colCount; i++ ) {
    row.append('<th>' + colHead[ i ] + '</th>');
}

//filling table with data
for ( let i = 0; i < animalArr.length; i++ ) {

    let displayDate = new Date( animalArr[ i ].dob ).toLocaleDateString();
    //getting current row details
    let currCells = [ animalArr[ i ].name, animalArr[ i ].color, animalArr[ i ].size, displayDate ];
    
    let row = $( '<tr></tr>' )
        .attr( 'id', 'row' + i )
        .appendTo( $( '#animTable' ) );

    for ( let j = 0; j < colCount; j++ ) {

        //creating update rows
        $( '<input></input>' )
            .attr( 'id', 'new' + colHead[ j ] + i )
            .attr( 'class', 'update' + i )
            .val( currCells[ j ] )
            .appendTo( row )
            .hide();

        //creating display rows
        $( '<td></td>' )
            .attr( 'id', colHead[ j ] + i )
            .attr( 'class', 'display' + i )
            .text( currCells[ j ] )
            .appendTo( row );
    }

    //creating delete buttons
    buttonMaker( $( '#row' + i ), i, 'delete' );

    //creating update buttons
    buttonMaker( $( '#row' + i ), i, 'update' );

    //creating submit update button
    buttonMaker( $( '#row' + i ), i, 'submit' );
}