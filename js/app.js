let miner = document.querySelector('.miner');
let move = 100;

window.addEventListener('load', () =>{
	miner.style.position = 'absolute';
	miner.style.left = 0;
	miner.style.top = 0;
});

window.addEventListener('keyup', (e) =>{
	switch(e.key){
		case 'arrowLeft' :
			miner.style.left = parseInt(miner.style.left) - move + 'px';
			break;
		case 'arrowRight' :
			miner.style.left = parseInt(miner.style.left) - move + 'px';
			break;
		case 'arrowUp' :
			miner.style.top = parseInt(miner.style.top) - move + 'px';
			break;
		case 'arrowDown' :
			miner.style.top = parseInt(miner.style.top) - move + 'px';
			break;
	}
});