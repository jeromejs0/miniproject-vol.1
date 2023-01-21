
$(document).ready(function(){

    $('form').submit(function(){  //triggers when the submit button is clicked
        var data = $(this).serializeArray()        //gets the forms data as an array / dictionary
        data.map( (e) => {localStorage.setItem(e.name, e.value)})      //stores the data in localstorage
    })
});
