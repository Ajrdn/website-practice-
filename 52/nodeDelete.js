function newRegister() {
  let newItem = document.createElement('li');
  let subject = document.querySelector('#subject');
  let newText = document.createTextNode(subject.value);
  newItem.appendChild(newText);

  let itemList = document.querySelector('#itemList');
  itemList.insertBefore(newItem, itemList.childNodes[0]);

  subject.value = '';

  let items = document.querySelectorAll('li');

  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      if(this.parentNode)
        this.parentNode.removeChild(this);
    });
  }
}