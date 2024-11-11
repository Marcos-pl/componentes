const list = document.querySelectorAll('.Navegação-lista');
function activeLink(){
  list.forEach((item) =>
item.classList.remove('ativo'));
this.classList.add('ativo');
}
list.forEach((item)=>
item.addEventListener('click', activeLink));