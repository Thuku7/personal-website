const nameSelector = document.querySelector('.my-name');
const intoText = document.querySelector('.intro')


console.log(nameSelector);


// event listeners

eventListener();


function eventListener() {

  nameSelector.addEventListener('click', changeTxt);
}


//functions


function changeTxt(event) {

  let newTxt = document.createElement('h1');
  newTxt.classList = 'my-name intro-text';
  newTxt.appendChild(document.createTextNode("Web Developer"));

  const oldHeading = nameSelector;

  const parentElementSelector = intoText;


  parentElementSelector.replaceChild(newTxt,oldHeading);

  
}

