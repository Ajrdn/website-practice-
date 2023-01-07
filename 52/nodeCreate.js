function newRegister() {
  let newItem = document.createElement('li');
  let subject = document.querySelector('#subject');
  let newText = document.createTextNode(subject.value);

  newItem.appendChild(newText);

  let itemList = document.querySelector('#itemList');
  itemList.appendChild(newItem);

  subject.value = '';
}