//Examine document object//
//console.dir(document);
// console.log(document.doctype);
// console.log(document.body);
//console.log(document.all[10])
// console.log(document.forms);
// console.log(document.links);

//GET element by ID
// console.log(document.getElementById('header-title'));
//let headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
// headerTitle.textContent='Hello'
// headerTitle.innertext='Goodbye'
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
//innerText pays attention to the styling
// headerTitle.innerHTML='<h3>Hello</h3>'
//h3 will be added inside the h1 but on the browser it showes it replaced the h1.
//headerTitle.style.borderBottom = 'solid 3px #ccc'

//GET ELEMENTS BY CLASSNAME

// let items=document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[2]);
// items[1].textContent='Hello 2';
// items[1].style.backgroundColor = 'yellow'
// for(let i=0;i<items.length;i++){
    // items[i].style.backgroundColor = '#f4f4f4';
// }
// 
//GET ELEMENTS BY TAGNAME

// let items=document.getElementsByTagName('li')
// console.log(items);
// console.log(items[2]);
// items[1].textContent='Hello 2';
// items[1].style.backgroundColor = 'yellow'
// for(let i=0;i<items.length;i++){
    // items[i].style.backgroundColor = '#f4f4f4';
// }
// 
//QUERYSELECTOR 
let header=document.querySelector('#main-header');
header.style.borderBottom = 'solid 3px #eee'
let input = document.querySelector('input');
input.value = 'Hello World'

let submit = document.querySelector('input[type="submit"]')
submit.value = 'SEND';
let item = document.querySelector('.list-group-item')
item.style.color = 'blue';
let secondItem= document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'

//QUERYSELECTORALL

let titles=document.querySelectorAll('.title');
console.log(titles)
titles[1].textContent = 'Goodday'
let odd = document.querySelectorAll('li:nth-child(odd)')
for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor= 'yellow';

}
let even = document.querySelectorAll('li:nth-child(even)')
for (let i=0;i<odd.length;i++){
    even[i].style.backgroundColor= 'coral';
}
//PARENT NODE

 let itemList=document.querySelector('#items');
 //console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

//PARENT ELEMENT WORKS SAME AS PARENT NODE


//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4'
//console.log(itemList.parentElement.parentElement.parentElement)

//CHILD NODE
// 
// console.log(itemList.childNodes)

// CHILDREN
//console.log(itemList.children)
// CHILDREN
// console.log(itemList.children[0])
// itemList.children[0].backgroundColor = 'purple'
//FIRSTCHILD
// console.log(itemList.firstChild)

//FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild)
//FIRST ELEMNT CHILD
// console.log(itemList.lastElementChild)
//previousElementSibling
//nextElementSibling

//createElement

// let newDiv = document.createElement('div');
// console.log(newDiv);
//add class
// newDiv.className = 'hi'
// 
//add id
// newDiv.id = 'hello1';
// 
// add attr
//newDiv.setAttribute('title', 'Hi Div');
// create  text node
// let newTextDiv = document.createTextNode('Hi world');
//Add text to DIV
// newDiv.appendChild(newTextDiv)
// console.log(newDiv);
//  
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// 
// newDiv.style.fontSize = '30px';

let button=document.getElementById('button').addEventListener
('click',buttonClick);
function buttonClick(){
    document.getElementById('header-title').textContent='changed'
}
