var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
gamePattern.push(randomChosenColour);

//==============Animate Button(Done)====================

$('#' + randomChosenColour).animate(
  {
    opacity: 0.1,
  },
  150,
  function () {
    $('#' + randomChosenColour).animate(
      {
        opacity: 1,
      },
      150
    );
  }
);

//===========random Number(Dome)===============

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

console.log(gamePattern);
