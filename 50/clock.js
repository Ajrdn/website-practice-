document.getElementById('bttn').onclick = displayTime;

function displayTime(){
  let left = (screen.availWidth - 400) / 2;
  let top = (screen.availHeight - 200) / 2;
  let opt = `left = ${left}, top = ${top}, width = 400, height = 200`;
  window.open('current.html', '', opt);
}