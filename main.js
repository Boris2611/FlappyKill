const smashSound = new Audio("smash.wav")

let pipeBack = 1;
let birdOffset = 0;
let killed = 1; 
let score = 0;

setInterval(offsetCheck, 100); // Geting offset


const birdKilled = () => {
    setTimeout(function(){killed=0;}, 500);
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("blood").style.visibility = "visible";

    if (score == 10) {
        document.getElementById("birdbox").className = "birdbox2";
        document.getElementById("birdbox").classList.remove = "birdbox";
    }


};

const smash = () => {
    if (pipeBack == 1) {
        pipeBack = 0;
        smashSound.play(); // Sound when bird is killed
        document.getElementById("pipe1").style.top = "0px";
        setTimeout(function() {document.getElementById("pipe1").style.top = "-200px"; pipeBack=1}, 500)

        // Killing The Bird
        if (birdOffset > 180 && birdOffset < 270) { // Depends on phone with
            killed = 1;
            document.getElementById("birdbox").style.visibility = "hidden";
            setTimeout(function() {document.getElementById("birdbox").style.visibility = "visible";}, 500)
            birdKilled()
        }
    }
};


function checkLose() {
    if (birdOffset > 270 && killed == 0) {
        alert("You Lost")
        score = 0;
        killed = 1;
        document.getElementById("blood").style.visibility = "hidden";
        document.getElementById("birdbox").classList.remove = "birdbox1";
        document.getElementById("birdbox").className = "birdbox";
    }
}
    

// Offset Testing
function offsetCheck() {
    document.getElementById("birdOffset").innerHTML = "Bird's Offset : " + document.getElementById("birdbox").offsetLeft + " --- Is Killed: " + killed;
    birdOffset = document.getElementById("birdbox").offsetLeft;
    checkLose();
}