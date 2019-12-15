var index = 0;
var numbersUrl = "http://numbersapi.com/random/trivia";
var jokesUrl ="http://api.icndb.com/jokes/random";
var jokeObject;

$(document).ready(function () {
    $("#gif").hide();
})

$("#btn").click(function () {
    // show loading
    $("#gif").show();
    //$("#btnDiv").css("display", "none");

    $.ajax({
        type: "GET",
        url: numbersUrl,
        dataType: "text",
        success: function (response) {
            $("#gif").hide();
            $("#numberInfo").append("<br><br>" + "<i>" + response + "</i>");
        },
        error: function (errorResponse) {
            $("#gif").hide();
            console.log("Errori tulee");
        }
    })
});

$(document).ready(function () {
    $("#gif2").hide();
})

$("#jokeBtn").click(function () {

    $("#gif2").show();

    $.ajax({
        type: "GET",
        url: jokesUrl,
        dataType: "json",
        success: function (response) {
            $("#gif2").hide();
            $("#rndJoke").attr("disabled", "true");
            console.log(response.value.joke);
                // each ~ for
            
            $("#theJoke").append("<br><br>" + "<i>" + response.value.joke + "</i>");

        
            index++;
            console.log(index);
            $("#counter").html("<i>" + "Joke Counter:<br>" + index + "</i>");
        },
        error: function (errorResponse) {
            $("#gif2").hide();
            console.log("Virhe");
        }
    })
})