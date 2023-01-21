
function g(arg){                  //gets the data from localStorage
    return localStorage.getItem(arg)
}

$(document).ready(function(){  //waits for the html to load completly

    $('#name').html( g('name')+'<br><span>'+g('designation')+'</span>' );
    $('#email-address').text(g('email-address'))
    $('#contact').text(g('contact'))
    $('#Address').text(g('Address'))
    $('#company-website').text(g('company-website'))
    $('#college-name').text(g('college-name'))
    $('#duration').text(g('duration'))
    $('#location').text(g('location'))
    $('#12college-name').text(g('12college-name'))
    $('#12duration').text(g('12duration'))
    $('#12location').text(g('12location'))
    $('#10college-name').text(g('10college-name'))
    $('#10duration').text(g('10duration'))
    $('#10location').text(g('10location'))
    $('#company-name').text(g('company-name'))
    $('#company-duration').text(g('company-duration'))
    $('#company-designation').text(g('company-designation'))
    $('#description1').text(g('description1'))
    $('#company2-name').text(g('company2-name'))
    $('#company2-duration').text(g('company2-duration'))
    $('#company2-designation').text(g('company2-designation'))
    $('#description2').text(g('description2'))
    $('#company3-name').text(g('company3-name'))
    $('#company3-duration').text(g('company3-duration'))
    $('#company3-designation').text(g('company3-designation'))
    $('#description3').text(g('description3'))
    $('#skills').text(g('skills'))
    $('#project-name').text(g('project-name'))
    $('#project-duration').text(g('project-duration'))
    $('#description').text(g('description'))
    $('#Profile').text(g('Profile'))
    $('#Website').text(g('Website'))




});
