//Console.log is a method that let's us print what we want on the browser's console
// console.log('hello I am the external link!')

//Let's u create alerts on browser
// alert('hello I am the external link!')

//Prompt let's you grab infos from user and use them ! 
 function calcA() {
    var age = prompt('What is your age ?');
    var yourYearOfBirth = 2023 - age;

    console.log(yourYearOfBirth);
 }

//  DOM
// grab body
const body = document.querySelector('.dom')
// created p tag
const paragraph = document.createElement('p')
// add text to p tag
paragraph.innerHTML = ' <b>Ceci est un paragraph ajoute avec les methodes DOM</b> '
// appedn the created element to the body
body.append(paragraph)

// paragraph.remove()
// body.removeChild(paragraph)

// getting the ID of the dom section
const domId = body.getAttribute('class');
console.log(domId) 

// put an ID on the DOM section
body.setAttribute('id','DOM-section')

// add and remove classes using classList ** TRES IMPORTANTE **
paragraph.classList.add('DOM-para')
body.classList.remove('dom')

// EVENT LISTENERS
const gtt = document.querySelector(".gtt")
gtt.style.color = 'red' // if u want to use hex code for color -> "#fff"
gtt.style.fontSize = '23px' // change the font size
//add an event listener to perform an action on click
gtt.addEventListener('click', e => {
console.log('You clicked to got to the top of the page')
})

// get ele by id
const h1 = document.getElementById("dom-title")
h1.style.backgroundImage = 'url("./assets/project-1.webp")'

// Create a menu button

//Select button
const menu = document.querySelector('#menu-btn')
const links = document.querySelector('.navLinks')
let state = menu.getAttribute('data-menu')

console.log(state)

//add an event listener on click
menu.addEventListener('click' , e => {
   console.log('clicked')
   // if class = opened
   if( state == 'closed' ){
      console.log('first if')
      //change data attribute
      menu.setAttribute('data-menu', 'opened')
      // update upper variable
      state = menu.getAttribute('data-menu')
      // add syles
     links.style.display = 'block'
      
   } else if(state == 'opened') {
      //change data attribute
      console.log('toggled')
      menu.setAttribute('data-menu', 'closed')
      // update upper variable
      state = menu.getAttribute('data-menu')
       // add syles
       links.style.display = 'none'
    
   }

})