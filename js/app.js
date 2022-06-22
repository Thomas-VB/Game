function startGame() {
	myGameArea.start();
  }
  
  var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
	  this.canvas.width = 480;
	  this.canvas.height = 270;
	  this.context = this.canvas.getContext("2d");
	  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
  }

let miner = document.querySelector('.miner');
let move = 75;
let grid = document.querySelector('.grid');
let cell = document.querySelectorAll('.cell');

window.addEventListener('load', () => {
			miner.style.position = 'absolute';
			miner.style.left = 0;
			miner.style.top = 0;
	});

window.addEventListener('load',() => {
	grid.style.position = 'fixed';
	grid.style.left = 30;
	grid.style.top = 30;
})

window.addEventListener('keyup', (e) =>{
	switch(e.key) {
		case 'ArrowLeft' :
			miner.style.left = parseInt(miner.style.left) - move + 'px';
			break;
		case 'ArrowRight' :
			miner.style.left = parseInt(miner.style.left) + move + 'px';
			break;
		case 'ArrowUp' :
			miner.style.top = parseInt(miner.style.top) - move + 'px';
			break;
		case 'ArrowDown' :
			miner.style.top = parseInt(miner.style.top) + move + 'px';
			break;
	}
});




/*const gridMatrix = [
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];*/



/*
const timeleft = 60;
const downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "STOP";
  } else {
    document.getElementById("time").innerHTML = "Time: " + timeleft;
  }
  timeleft -= 1;
}, 1000);

const restart = document.getElementById("new-game-button");

if (
	restartGame.addEventListener("click", function () {
})) {
    location.reload()
}

*/

//* TIMER */

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      seconds = parseInt(timer * 1, 10);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = "Time left: " + seconds;

      if (--timer < 0) {
        timer = duration;
      }

      if (seconds == 0) {
        display.textContent = "STOP"
        timer = 0
    } 
    }, 1000);    
  }

  window.onload = function () {
    let minute = 60,
    display = document.querySelector('#timer');
    startTimer(minute, display);
  };