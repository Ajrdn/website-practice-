let list = document.querySelectorAll('.check');

for(let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    list[i].style.color = '#ccc';
    list[i].parentNode.style.color = '#ccc';
		list[i].parentNode.style.textDecoration = 'line-through';
  });
}