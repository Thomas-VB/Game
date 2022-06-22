class GridSystem {

	constructor(matrix, playerX, playerY) {
		this.matrix = matrix;
		this.outlineContext = this.#getContext(0, 0, "#FFF");
		this.topContext = this.#getContext(0, 0, "#111", true);
		this.cellSize = 70;
		this.padding = 2;
		this.player = { x: playerX, y: playerY, color: 'yellow'};
		this.matrix[playerY][playerX] = 2;

		document.addEventListener("keydown", this.#movePlayer);


	}



	#isValidMove(x, y) {
		if (this.matrix[this.player.y + y][this.player.x + x] === 0) {
			return true;
		}
		return false;
	}

	#updateMatrix(y, x, val) {
		this.matrix[y][x] = val;
	}

	#movePlayer = ( { keyCode } ) => {
		if (keyCode === 37) {
			if (this.#isValidMove(-1, 0)) {
			 this.#updateMatrix(this.player.y, this.player.x, 0);
			 this.#updateMatrix(this.player.y, this.player.x - 1, 2);
			 this.player.x --;
			 this.render();
		 }
		} else if (keyCode === 39) {
			if (this.#isValidMove(1, 0)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y, this.player.x + 1, 2);
				this.player.x ++;
				this.render();
			}
		} else if (keyCode === 38) {
			if (this.#isValidMove(0, -1)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y - 1, this.player.x, 2);
				this.player.y --;
				this.render();
			}
		} else if (keyCode === 40) {
			if (this.#isValidMove(0, 1)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y + 1, this.player.x, 2);
				this.player.y ++;
				this.render();
			}
	}
}

	#dig = ( {keyCode} ) => {
		if (keyCode === 32) {
			color = 'brown';
		}
	}

	#getCenter(w, h) {
		return {
			x: window.innerWidth / 2 - w / 2 + "px",
			y: window.innerHeight / 2 - h / 2 + "px"
		};
	}

	#getContext(w, h, color = "#111", isTransparent = false) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		const center = this.#getCenter(w, h);
		this.canvas.style.marginLeft = center.x
		this.canvas.style.marginTop = center.y;
		document.body.appendChild(this.canvas);

		return this.context;
	}

	render() {
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
		const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		const center = this.#getCenter(w, h);
		this.outlineContext.canvas.style.marginLeft = center.x
		this.outlineContext.canvas.style.marginTop = center.y;

		this.topContext.canvas.style.marginLeft = center.x
		this.topContext.canvas.style.marginTop = center.y;

		

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				const cellVal = this.matrix[row][col];
				let color = "#089b20";

				if (cellVal === 1) {
					color = "#089b20";
				} else if (cellVal === 2) {
					color = this.player.color;
				}

				this.outlineContext.fillStyle = color;
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);


	
			}
		}

		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Grid Based System", 20, 30);
	}
}

const gridMatrix = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const gridSystem = new GridSystem(gridMatrix, 1, 1);
gridSystem.render();
















































/*function startGame() {
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

 function reload(){
	window.location.reload();
  }

let points = document.querySelector("points");
let diamond = 1000
let gold = 500


function addPoints() {
	if (diamond) {
		points + diamond
	}else if(gold){
		points + gold
	}
}