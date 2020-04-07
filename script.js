document.getElementById("half-button").addEventListener("click", halfNumber);

function halfNumber() {
  var inputNumber = document.getElementById("half-input").value;
  outputNumber = inputNumber/2;
  alert("half of " + inputNumber + " is " + outputNumber);
}

document.getElementById("fortune-button").addEventListener("click", fortune);

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var fortuneOutputWords = document.getElementById("fortune-output-words").value;

  var fortuneOutputWords = ["The early bird gets the worm, but the second mouse gets the cheese.", "Be on the alert to recognize your prime at whatever time of your life it may occur.", "Your road to glory will be rocky, but fulfilling.", "Courage is not simply one of the virtues, but the form of every virtue at the testing point."];

  var randomFortune = fortuneOutputWords[Math.floor(Math.random()*fortuneOutputWords.length)];

  document.getElementById("fortune-output").innerHTML = (name + ", your fortune is: " + randomFortune);
}

var fortuneOutput = document.getElementById("fortune-output-text");
fortuneOutput.addEventListener("click", restyle)

function restyle() {
  var fontSize = Math.floor(Math.random() * 42);
  var col1 = Math.floor(Math.random() * 255);
  var col2 = Math.floor(Math.random() * 255);
  var col3 = Math.floor(Math.random() * 255);
  var bG = Math.floor(Math.random() * 255);

  fortuneOutput.style.fontSize = fontSize + "px";
  fortuneOutput.style.color = "rgb(" + col1 + "," + col2 + "," + col3 + ")";
  fortuneOutput.style.background = "rgb(" + bG + "," + col2 + "," + col3 + ")";
}

restyle();
