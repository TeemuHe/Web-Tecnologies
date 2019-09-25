function writeLines() {
    //console.log((Date()));
    //alert("Ilmoitus!");
    console.log("Pitäisi olla a");
    console.log("Kirjattiin", document.getElementById("myLetter").value)
    var letter = document.getElementById("myLetter").value;
    if(letter.toLowerCase() == 'a'){
        console.log("OIKEIN");
    }
    else{
        console.log("VÄÄRIN");
    }
}
function numberChecker() {
    console.log("Pitäisi olla 1-10");
    console.log("Kirjattiin", document.getElementById("myNumberValue").value);
    var number = document.getElementById("myNumberValue").value;
    if(number >= 1 && number <= 10){
        console.log("OIKEIN");
        //console.log(number * number);
    }
    else{
        console.log("VÄÄRIN");
    }
}
function readLocation() {
    console.log(document.getElementById("address").value);
    var address = document.getElementById("address").value;
    console.log(document.getElementById("city").value);
    var city = document.getElementById("city").value;
    document.getElementById('mapFrame').src= 'https://www.google.com/maps?q=' + address + city + '&output=embed';
}
