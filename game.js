var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
var userClickedPattern=[];
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
  handler(this);
});

function handler(element){
  var userChosenColour=$(element).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
}


//===========random Number(Done)===============

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
