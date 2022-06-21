const restart = document.getElementById("new-game-button");


restartGame.addEventListener("click", function () {
    return location.reload()
});

const timeleft = 60;
const downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "STOP";
  } else {
    document.getElementById("time").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);