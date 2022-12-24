function calcSum(n) {
  let sum = 0;
  
  for(let i = 1; i <= n; i++) {
    sum += i;
  }

  document.write(`1부터 ${n}까지 더하면 ${sum}`);
}

let userNumber = prompt('얼마까지 더할까요?');

if(userNumber !== null) {
  calcSum(parseInt(userNumber));
}