var buttonColours = ['red', 'blue', 'green', 'yellow'];
var randomChosenColour=buttonColours[nextSequence()];


//===========random Number(Dome)===============

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4)
    return randomNumber;
}

console.log(randomChosenColour);