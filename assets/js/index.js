

let inputValue= document.querySelector('.inputTxt');
let toDo = document.querySelector('.input-list');
let addTaskbtn =document.querySelector('.addBtn')

addTaskbtn.addEventListener('keypress', addTask);

function addTask(){
  if(inputValue.value == ''){
    alert('Boş Ekeleme yapamazsınız');
  } else {
    toDo.innerHTML += ` <li class='task'> ${inputValue.value} <a class='spanx'>x</a> </li>`;
  }
  inputValue.value = '';
}

// x icin silmek
toDo.addEventListener('click', function (event) {
  if (event.target.classList.contains('spanx')) {
    event.target.parentElement.remove();
  }
});

// ustunu cizmek icin // event.target olay oldugunda 
toDo.addEventListener('click', function (event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('checked');
  }
});


// calismadi filtreleme seceneklerine calis

document.querySelector('.showActive').addEventListener('click', showActiveOnes);

function showActiveOnes (){
if(toDo.classList.contains('task')){
  toDo.classList.remove('checked')
}
}

// gece modu /eh
let dark = document.querySelector('.container');

document.querySelector('.dark-mode').addEventListener('click', beDark);

function beDark() {
  dark.classList.toggle('black');
  toDo.classList.toggle('black');
}


