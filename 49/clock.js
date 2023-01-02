setInterval(displayNow, 1000);

function displayNow() {
  let currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString();
  document.querySelector('#current').innerHTML = currentTime;
}