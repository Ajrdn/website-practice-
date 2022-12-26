function sumMulti(x, y) {
  if(x === y)
    return(x * y);
  else
    return(x + y);
}

let x = parseInt(prompt('첫 번째 수를 입력해 주세요.'));
let y = parseInt(prompt('두 번째 수를 입력해 주세요.'));
document.write(sumMulti(x, y));