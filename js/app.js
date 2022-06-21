let miner = document.querySelector('.miner');
let move = 75;
let grid = document.querySelector('.grid');

window.addEventListener('load', () => {
			miner.style.position = 'absolute';
			miner.style.left = 0;
			miner.style.top = 0;
	});

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

for (let row = 0; row < gridMatrixGrass.length; row ++) {
	for (let col = 0; col < gridMatrixGrass[row].length; col ++){
		const cellVal = gridMatrixGrass[row][col];
		let color = '#111';

		if (cellVal === 5) {
			color = '#F00';
		} else if (cellVal === 6) {
			color = miner;
		}
	}
}
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