const smashSound = new Audio("smash.wav");

let pipeBack = 1;
let pipeOffset;
let birdOffset;
let killed = 1; 
let score = 0;

setInterval(offsetCheck, 10); // Geting offset

const birdKilled = () => {
    setTimeout(function(){killed=0;}, 500);
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("blood").style.visibility = "visible";

    if (score == 2) {
        document.getElementById("birdbox").style.animation = "birdMovementFast 2s linear infinite ";
    }

    if (score == 6) {
        document.getElementById("birdbox").style.animation = "birdMovement 2s linear infinite";
    }

    if (score == 10) {
        document.getElementById("birdbox").style.animation = "birdMovementFast 1.5s linear infinite";
    }

    if (score == 14) {
        document.getElementById("birdbox").style.animation = "birdMovement 2s linear infinite";
    }

    if (score == 20) {
        document.getElementById("birdbox").style.animation = "birdMovementFast 1.2s linear infinite";
    }
};

const smash = () => {
    if (pipeBack == 1) {
        pipeBack = 0;
        smashSound.play(); // Sound when bird is killed
        document.getElementById("pipe1").style.top = "0px";
        setTimeout(function() {document.getElementById("pipe1").style.top = "-200px"; pipeBack=1}, 500)

        // Killing The Bird
        if (birdOffset > (pipeOffset - 70) && birdOffset < pipeOffset) { // Depends on phone with
            killed = 1;
            document.getElementById("birdbox").style.visibility = "hidden";
            setTimeout(function() {document.getElementById("birdbox").style.visibility = "visible";}, 500)
            birdKilled()
        }
    }
};


function checkLose() {
    if (birdOffset > pipeOffset && killed == 0) {
        alert("You Lost")
        score = 0;
        killed = 1;
        document.getElementById("blood").style.visibility = "hidden";
        document.getElementById("birdbox").style.animation = "birdMovement 2s linear infinite";
    }
}
    
// Offset Testing
function offsetCheck() {
    birdOffset = document.getElementById("birdbox").offsetLeft;
    pipeOffset = document.getElementById("pipe1").offsetLeft;
    document.getElementById("birdOffset").innerHTML = "Bird's Offset : " + birdOffset + " --- Pipe's Offset" + pipeOffset + " --- Is Killed: " + killed;
    checkLose();
}