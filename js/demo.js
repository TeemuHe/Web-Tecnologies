var code;

function writeLines() {
  //console.log((Date()));
  //alert("Ilmoitus!");
  console.log("Pitäisi olla a");
  console.log("Kirjattiin", document.getElementById("myLetter").value)
  var letter = document.getElementById("myLetter").value;
  if (letter.toLowerCase() == 'a') {
    console.log("OIKEIN");
  }
  else {
    console.log("VÄÄRIN");
  }
}
function numberChecker() {
  console.log("Pitäisi olla 1-10");
  console.log("Kirjattiin", document.getElementById("myNumberValue").value);
  var number = document.getElementById("myNumberValue").value;
  if (number >= 1 && number <= 10) {
    console.log("OIKEIN");
    //console.log(number * number);
  }
  else {
    console.log("VÄÄRIN");
  }
}
function readLocation() {
  console.log(document.getElementById("address").value);
  var address = document.getElementById("address").value;
  console.log(document.getElementById("city").value);
  var city = document.getElementById("city").value;
  document.getElementById('mapFrame').src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
}
/*function decreaseNr(number) {
  var number = document.getElementById(number).value;
  $(number).ready(function() {
    if(number < 1) {
      var dialog = '<div id="dialog" title="HUOMIO" style="display:none">Virheellinen luku!</div>';
      $('body').append(dialog);
      $('#dialog').dialog({
        buttons: {
          "OK": function () {
            $(this).dialog("close");
          }
        }
      });
    }
    else {
      var newValue = number - 1;
      document.getElementById(number).value = newValue;
      console.log(newValue);
    }
  })
}*/

function decreaseNr1() {
  var firstNumber = document.getElementById("firstNumber").value;
  $(firstNumber).ready(function () {
    if (firstNumber < 1) {
      var dialog = '<div id="dialog" title="HUOMIO" style="display:none">Virheellinen luku!</div>';
      $('body').append(dialog);
      $("#dialog").dialog({
        buttons: {
          "OK": function () {
            $(this).dialog("close");
          }
        }
      });
    }
    else {
      var newValue = firstNumber - 1;
      document.getElementById("firstNumber").value = newValue;
      console.log(newValue);
    }
  });
}
function increaseNr1() {
  var firstNumber = document.getElementById("firstNumber").value;
  $(firstNumber).ready(function () {
    if (firstNumber >= 10) {
      var dialog = '<div id="dialog" title="HUOMIO" style="display:none">Virheellinen luku!</div>';
      $('body').append(dialog);
      $("#dialog").dialog({
        buttons: {
          "OK": function () {
            $(this).dialog("close");
          }
        }
      });
    }
    else {
      var newValue = Number(firstNumber) + 1;
      document.getElementById("firstNumber").value = newValue;
      console.log(newValue);
    }
  });
}
function decreaseNr2() {
  var secondNumber = document.getElementById("secondNumber").value;
  $(secondNumber).ready(function () {
    if (secondNumber < 1) {
      var dialog = '<div id="dialog" title="HUOMIO" style="display:none">Virheellinen luku!</div>';
      $('body').append(dialog);
      $("#dialog").dialog({
        buttons: {
          "OK": function () {
            $(this).dialog("close");
          }
        }
      });
    }
    else {
      var newValue = secondNumber - 1;
      document.getElementById("secondNumber").value = newValue;
      console.log(newValue);
    }
  });
}
function increaseNr2() {
  var secondNumber = document.getElementById("secondNumber").value;
  $(secondNumber).ready(function () {
    if (secondNumber >= 10) {
      var dialog = '<div id="dialog" title="HUOMIO" style="display:none">Virheellinen luku!</div>';
      $('body').append(dialog);
      $("#dialog").dialog({
        buttons: {
          "OK": function () {
            $(this).dialog("close");
          }
        }
      });
    }
    else {
      var newValue = Number(secondNumber) + 1;
      document.getElementById("secondNumber").value = newValue;
      console.log(newValue);
    }
  });
}
window.onload = function () {
  this.getRndInteger();
}
function getRndInteger() {
  document.getElementById('firstNumber').value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  document.getElementById('secondNumber').value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
function calculate() {
  console.log(document.getElementById('firstNumber').value);
  console.log(document.getElementById('plusOrMinus').value);
  console.log(document.getElementById('secondNumber').value);

  var number1 = Number(document.getElementById("firstNumber").value);
  var number2 = Number(document.getElementById("secondNumber").value);
  if (document.getElementById('plusOrMinus').value == "plus") {
    var finalAnswer = number1 + number2;
    console.log(finalAnswer);
  }
  else if(document.getElementById('plusOrMinus').value == "minus"){
    var finalAnswer = number1 - number2;
    console.log(finalAnswer);
  }
  else if(document.getElementById('plusOrMinus').value == "multiple"){
    var finalAnswer = number1 * number2;
    console.log(finalAnswer);
  }
  else {
    var finalAnswer = number1 / number2;
    console.log(finalAnswer);
  }
  document.getElementById("answer").value = finalAnswer;
}

/*$("myInput").keyup(function() {
  var value = $(this).val();
}).keyup();*/

function textCode() {
  var code = document.getElementById("myInput").value;
  if(code.length == 4) {
    document.getElementById("myInput2").focus();
  }
  var code2 = document.getElementById("myInput2").value;
  if(code2.length == 4) {
    document.getElementById("myInput3").focus();
  }
  var code3 = document.getElementById("myInput3").value;
  if(code3.length == 4) {
    document.getElementById("fullCode").innerHTML = "Viimeisin koodi: " + code + " " + code2 + " " + code3;
  }
}

function clearCode() {
  document.getElementById("myInput").value = '';
  document.getElementById("myInput2").value = '';
  document.getElementById("myInput3").value = '';
}

function wrongInput() {
  document.getElementById("myInput").focus();
}