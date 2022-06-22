
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
    let minute = 30,
    display = document.querySelector('#timer');
    startTimer(minute, display);
  };

 function reload(){
	window.location.reload();
  }

class GridSystem {

	constructor(matrix, playerX, playerY) {
		this.matrix = matrix;
		this.outlineContext = this.#getContext(0, 0, "#FFF");
		this.topContext = this.#getContext(0, 0, "#111", true);
		this.cellSize = 50;
		this.padding = 2;
		this.player = { x: playerX, y: playerY, color: 'yellow'};
		this.matrix[playerY][playerX] = 2;

		document.addEventListener("keydown", this.#movePlayer);


	}



	#isValidMove(x, y) {
		if (this.matrix[this.player.y + y][this.player.x + x] === 0) {
			return true;
		} else if (this.matrix[this.player.y + y][this.player.x + x] === 3) {
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

		

		

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				const cellVal = this.matrix[row][col];
				let color = "#089b20";

				if (cellVal === 1) {
					color = "brown";
				} else if (cellVal === 2) {
					color = this.player.color;
				} else if (cellVal === 3) {
					color = "purple";
				}
				

				this.outlineContext.fillStyle = color;
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);


	
			}
		}
	}
}

const gridMatrix = [
	[0, 1, 0, 0, 3, 1, 3, 1, 0, 0],
	[0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 0, 0, 1, 0, 3, 1, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 0, 1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 3, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
	[0, 1, 3, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 3, 0, 0, 0, 0, 0]
];

const gridSystem = new GridSystem(gridMatrix, 1, 1);
gridSystem.render();

let points = document.querySelector("points");
points = 1500
let diamond = 1000
let gold = 500


function addPoints(display) {
	display.textContent = "Points: " + points;
	if (diamond) {
		points + diamond
		display.textContent = "Points: " + points;
	}else if(gold){
		points + gold
		display.textContent = "Points: " + points;
	}
	display = document.querySelector("points");
}
