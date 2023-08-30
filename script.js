var slideIndex = 1;

function plusDivs(n){
    showDivs(slideIndex += n);
}
function showDivs(n){
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    for(i = 0 ; i < x.length ; i++){
        x[i].style.display ="none";
    }
    if (slideIndex > x.length){
        slideIndex = 1;
    } 
    else if( n < 1) {
        slideIndex = x.length;
    }
    x[slideIndex - 1].style.display ="block";
}
setInterval(function() {
    plusDivs(1)
}, 5000);

function validationForm(){
    var fName = document.forms["massage-form"]["fName"].value;
    var lName = document.forms["massage-form"]["lName"].value;
    var BD = document.forms["massage-form"]["birth-date"].value;
    var gender = document.forms["massage-form"]["gender"].value;
    var pesan = document.forms["massage-form"]["message"].value;
    if (fName == "") {
        alert("First name must be filled out");
        return false;
    }
    if (lName == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (BD == "") {
        alert("date must be filled out");
        return false;
    }
    if (gender == "") {
        alert("gender must be filled out");
        return false;
    }
    const d = new Date();
    document.getElementById("datetime").innerHTML = d;
    document.getElementById("name").innerHTML = fName +" "+ lName;
    document.getElementById("birth-date").innerHTML = BD;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("message").innerHTML = pesan;
    return false;
}