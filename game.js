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

//================Play Sound=================

new Audio("sounds/"+randomChosenColour+".mp3").play();


//============================

$(".btn").click(function (e) { 
  handler();
});

function handler() {
  var userChosenColour; 
}


//===========random Number(Done)===============

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
