let memNum = prompt('입장객은 몇 명인가요?');
let colNum = prompt('한 줄에 몇 명씩 앉습니까?');

if(memNum % colNum === 0)
  rowNum = parseInt(memNum / colNum);
else
  rowNum = parseInt(memNum / colNum) + 1;

document.write('<table>');

for(let i = 0; i < rowNum; i++) {
  document.write('<tr>');
  for(let j = 1; j <= colNum; j++) {
    seatNum = i * colNum + j;
    if(seatNum > memNum) break;
    document.write(`<td> 좌석 ${seatNum} </td>`);
  }
  document.write('</tr>');
}

document.write('</table>');