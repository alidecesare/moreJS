document.getElementById("half-button").addEventListener("click", halfNumber);

function halfNumber() {
  var inputNumber = document.getElementById("half-input").value;
  outputNumber = inputNumber/2;
  alert("half of " + inputNumber + " is " + outputNumber);
}

document.getElementById("fortune-button").addEventListener("click", fortune);

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var fortuneOutput = document.getElementById("fortune-output").value;

  var fortuneOutput = ["The early bird gets the worm, but the second mouse gets the cheese.", "Be on the alert to recognize your prime at whatever time of your life it may occur.", "Your road to glory will be rocky, but fulfilling.", "Courage is not simply one of the virtues, but the form of every virtue at the testing point."];

  var randomFortune = fortuneOutput[Math.floor(Math.random()*fortuneOutput.length)];

  document.body.innerHTML = (name + ", your fortune is: " + randomFortune);
}
