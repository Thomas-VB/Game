// const restart = document.getElementById("new-game-button");


// restartGame.addEventListener("click", function () {
//     return location.reload()
// });


//* TRY 1 */

// const timeleft = 60;
// const downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("time").innerHTML = "STOP";
//   } else {
//     document.getElementById("time").innerHTML = timeleft;
//   }
//   timeleft -= 1;
// }, 1000);


//* TRY 2 */

// const remainingTime = 30;

// const isStopped = true;

// const countContainer = document.getElementById("time");

// // function to display time
// const renderTime = () => {
//   // decement time
//   remainingTime -= 1;
//   // render count on the screen
//   countContainer.innerHTML = remainingTime;
//   // timeout on zero
//   if (remainingTime === 0) {
//     isStopped = true;
//     clearInterval(timer);
//     remainingTime = 30;
//   }
// };

// // Function to start Timer
// const startTimer = () => {
//   if (isStopped) {
//     isStopped = false;
//     countContainer.innerHTML = remainingTime;
//     timer = setInterval(renderTime, 1000);
//   }
// };


//* TRY 3 */

  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      seconds = parseInt(timer * 1, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
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
    display = document.querySelector('#time');
    startTimer(minute, display);
  };