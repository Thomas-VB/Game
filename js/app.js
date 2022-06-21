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



class GridSystem {
	constructor(miner, matrix, playerX, PlayerY)
	{
		this.matrix = matrix;
		this.miner = window.addEventListener('load', () => {
			miner.style.position = 'absolute';
			miner.style.left = 0;
			miner.style.top = 0;
		this.cellSize = 70;
		this.padding = 2;
		this.player = {x: minerX, y: minerY};
		this.matrix[minerY][minerX] = 2;
		})

	
	miner = document.querySelector('.miner');
	}


}



/*window.addEventListener('keyup', (e) =>{
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
 
if (cellVal === 5) {
	color: rgba(2, 122, 2, 0.501);
} else if (cellVal === 2) {
	color = this.player.color;
}*/


	#movePlayer = ( { keyCode } ) => {
		if (keyCode === left) {
			if (this.#isValidMove(-1, 0)) {
			 this.#updateMatrix(this.miner.y, this.miner.x, 0);
			 this.#updateMatrix(this.miner.y, this.miner.x - 1, 2);
			 this.player.x --;
			 this.render();
		 }
		} else if (keyCode === top) {
			if (this.#isValidMove(1, 0)) {
				this.#updateMatrix(this.miner.y, this.miner.x, 0);
 			 	this.#updateMatrix(this.miner.y, this.miner.x + 1, 2);
				this.player.x ++;
				this.render();
			}
		} else if (keyCode === right) {
			if (this.#isValidMove(0, -1)) {
				this.#updateMatrix(this.miner.y, this.miner.x, 0);
 			 	this.#updateMatrix(this.miner.y - 1, this.miner.x, 2);
				this.player.y --;
				this.render();
			}
		} else if (keyCode === bottom) {
			if (this.#isValidMove(0, 1)) {
				this.#updateMatrix(this.miner.y, this.miner.x, 0);
 			 	this.#updateMatrix(this.miner.y + 1, this.miner.x, 2);
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

		this.topContext.canvas.style.marginLeft = center.x
		this.topContext.canvas.style.marginTop = center.y;

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				const cellVal = this.matrix[row][col];
				let color = "#111";

				if (cellVal === 1) {
					color = "#4488FF";
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
];

const gridMatrixGrass = [
	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

const gridSystem = new GridSystem(gridMatrix, 1, 1);
gridSystem.render();

