//Change the img, colors of product category and add to cart button

//declare variables for the elements

//call first kung ano yung mga gusto mong pagalawin or manipulate

let image = document.querySelector ('.productImg');
let category = document.getElementsByTagName('h3');
let addToCart = document.getElementById('btn');
let black = document.querySelector('.black');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let blue = document.querySelector('.blue');

black.addEventListener('click', ()=>{
    image.style.backgroundImage = 'url(./img/black.jpg)';
    category[0].style.backgroundColor = 'black';
    
})

red.addEventListener('click', ()=> {
    image.style.backgroundImage = 'url(./img/red.jpg)';
    category[0].style.backgroundColor = 'red';
})

yellow.addEventListener('click', ()=> {
    image.style.backgroundImage = 'url(./img/yellow.jpg)';
    category[0].style.backgroundColor = 'yellow';
    
})

blue.addEventListener('click', ()=> {
    image.style.backgroundImage = 'url(./img/blue.jpg)';
    category[0].style.backgroundColor = 'blue';
})


function addToCartClicked() {
    alert("Porsche 911 Carera added to cart!");
  }
  
  // from an HTML button element with the id "btn" in my HTML
  var addToCartButton = document.getElementById("btn");
  addToCartButton.addEventListener('click', addToCartClicked);