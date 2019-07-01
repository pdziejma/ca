//a function to delete an animal
function delEvent() {
    let ind = this.id.replace( /\D+/g, '' );
    let delName = animalArr[ ind ].name;
    let delColor = animalArr[ ind ].color;
    let delSize = animalArr[ ind ].size;
    let delDob = animalArr[ ind ].dob;
    let delId = animalArr[ ind ]._id;
    let data = {
        '_id' : delId,
        'name' : delName,
        'color' : delColor,
        'size' : delSize,
        'dob' : delDob
    }
    //delete from database with jquery
    $.ajax({
        url : 'http://localhost:3000/animals/' + delId,
        type : 'DELETE',
        datatype : 'JSON',
        data : data,
        success : function() {
            //deleting from animalArr array
            animalArr.splice(ind, 1);    
        }
    });

    //delete from dropdown
    $( '#option' + ind ).remove();
    //delete from table
    $( '#row' + ind ).remove();

    //adjust ids of elements
    for ( let j = parseInt( ind ) + 1; j < animalArr.length; j++ ) {

        //adjusts input ids
        $('#row' + j).children('input').each(function () {
            //updates ids
            this.id = this.id.replace( /\d+$/, ( j - 1 ) );
            //updates classes
            if ( $( this ).hasClass( 'update' + j ) ) {
                $( this )
                    .addClass( 'update' + ( j - 1 ) )
                    .removeClass( 'update' + j );
            } else if ( $( this ).hasClass( 'display' + j ) ) {
                $( this )
                    .addClass( 'display' + ( j - 1 ) )
                    .removeClass( 'display' + j );
            }
        });

        //adjusts row cell ids
        $('#row' + j).children('td').each(function () {
            //updates ids
            this.id = this.id.replace( /\d+$/, ( j - 1 ) );
            //updates classes
            if ( $( this ).hasClass( 'update' + j ) ) {
                $( this )
                    .addClass( 'update' + ( j - 1 ) )
                    .removeClass( 'update' + j );
            } else if ( $( this ).hasClass( 'display' + j ) ) {
                $( this )
                    .addClass( 'display' + ( j - 1 ) )
                    .removeClass( 'display' + j );
            }
        });

        //adjusts dropdown option id
        $( '#option' + j ).attr( 'id', 'option' + ( j - 1 ) );
        
        //adjusts row id
        $( '#row' + j ).attr( 'id', 'row' + ( j - 1 ) );
    }
}