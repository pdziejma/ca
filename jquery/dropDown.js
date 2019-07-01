//replaces p1 with text for selected animal
function getDesc() {
    let ind = $( '#select' ).prop( 'selectedIndex' );
    $( '#p1' ).html( 
        'The ' + animalArr[ ind ].name.toLowerCase() +
        ' is a ' + animalArr[ ind ].size.toLowerCase() +
        ' sized, ' + animalArr[ ind ].color.toLowerCase() + ' colored animal.'
    );
}
//set up for dropdown
var option = '';

//creation of select
var newSelect = $( '<select></select>' )
    .attr( 'id', 'select' )
    .attr( 'onchange', 'getDesc();' )
    .appendTo( $( '#dynamicInput' ) );
    
//creation of animal options
for ( let i = 0; i < animalArr.length; i++ ) {
    option = $( '<option></option>' )
        .attr( 'id', 'option' + i )
        .html( animalArr[ i ].name )
        .appendTo( newSelect );
}