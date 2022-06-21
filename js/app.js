let miner = document.querySelector('.miner');
const canvas = document.querySelector('canvas');
let move = 73;

/*window.addEventListener('load', () => {
	miner.style.position = 'absolute';
	miner.style.left = 0;
	miner.style.top = 0;
});*/


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


