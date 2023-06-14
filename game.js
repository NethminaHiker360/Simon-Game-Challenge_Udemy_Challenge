var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
var userClickedPattern = [];
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

playSound(randomChosenColour);

//============================

$('.btn').click(function (e) {
  handler(this);
});

function handler(element) {
  var userChosenColour = $(element).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
}

//============Animate Press===============

function animatePress(currentColour) {
  
}




//===========random Number(Done)===============

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

//================Play Sound()==========

function playSound(name) {
  switch (name) {
    case 'blue':
      new Audio('sounds/blue.mp3').play();
      break;
    case 'green':
      new Audio('sounds/green.mp3').play();
      break;
    case 'red':
      new Audio('sounds/red.mp3').play();
      break;
    case 'wrong':
      new Audio('sounds/wrong.mp3').play();
      break;
    case 'yellow':
      new Audio('sounds/yellow.mp3').play();
      break;
    default:
      break;
  }
}
