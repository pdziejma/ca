//a function to delete an animal
function delEvent() {
    let ind = this.id.replace(/\D+/g, '');
    let delName = animalArr[ind].name;
    let delColor = animalArr[ind].color;
    let delSize = animalArr[ind].size;
    let delDob = animalArr[ind].dob;
    let delId = animalArr[ind]._id;
    let data = {
        '_id': delId,
        'name': delName,
        'color': delColor,
        'size': delSize,
        'dob': delDob
    }
    //delete from database with jquery
    $.ajax({
        url: 'http://localhost:3000/animals/' + delId,
        type: 'DELETE',
        datatype: 'JSON',
        data: data,
        success: function(data) {
            //deleting from animalArr array
            animalArr.splice(ind, 1);    
        }
    });

    //delete from dropdown
    $('#option' + ind).remove();
    //delete from table
    $('#row' + ind).remove();
    $('#newRow' + ind).remove();

    //adjust ids of elements
    for (let j = parseInt(ind) + 1; j < animalArr.length; j++) {
        //adjusts dropdown option id
        $('#option' + j).attr('id', 'option' + (j-1));
        //adjusts newRow id
        $('#newRow' + j).attr('id', 'newRow' + (j-1));
        //adjusts user input ids
        $('#newName' + j).attr('id', 'newName' + (j-1));
        $('#newColor' + j).attr('id', 'newColor' + (j-1));
        $('#newSize' + j).attr('id', 'newSize' + (j-1));
        $('#newDate of Birth' + j).attr('id', 'newDate of Birth' + (j-1));
        //adjusts submit button id
        $('#submitButton' + j).attr('id', 'submitButton' + (j-1));
        //adjusts row id
        $('#row' + j).attr('id', 'row' + (j-1));
        //adjusts cell ids
        $('#name' + j).attr('id', 'name' + (j-1));
        $('#color' + j).attr('id', 'color' + (j-1));
        $('#size' + j).attr('id', 'size' + (j-1));
        $('#dob' + j).attr('id', 'dob' + (j-1));
        //adjusts deletebutton id
        $('#deleteButton' + j).attr('id', 'deleteButton' + (j-1));
        //adjusts update button id
        $('#updateButton' + j).attr('id', 'updateButton' + (j-1));
    }
}