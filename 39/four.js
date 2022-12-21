let num = parseInt(prompt('숫자를 입력하세요.'));

if(num % 4 === 0)
  document.write(`${num}는 4의 배수입니다.`);
else
  document.write(`${num}는 4의 배수가 아닙니다.`);