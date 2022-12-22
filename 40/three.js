let num = parseInt(prompt('몇 까지 3의 배수를 찾을까요?', '100'));
let count = 0;

for(let i = 1; i <= num; i++) {
  if(i % 3 === 0) {
    document.write(`${i}, `);
    count++;
  }
}

document.write(`<p>${num}까지 3의 배수의 개수 : ${count}</p>`);