let now = new Date();
let firstDay = new Date("2021-04-14");
let passedTime = now.getTime() - firstDay.getTime();

passedTime = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector('#result').innerText = passedTime;