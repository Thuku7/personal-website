const nameSelector = document.querySelector('.my-name');
const intoText = document.querySelector('.intro');
const about = document.querySelector("#about");
const projects = document.querySelector('#projects');
const showMore = document.querySelector('.show-more')


console.log(nameSelector);


// event listeners

eventListener();


function eventListener() {

  nameSelector.addEventListener('mouseover', changeTxt);

  document.addEventListener("DOMContentLoaded", hideNSeek)

  showMore.addEventListener('click',showContent);
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


function hideNSeek() {

  about.style.display = "none";
  projects.style.display = "none";

}


function showContent () {
  about.style.display = "flex";
  projects.style.display = "flex";

}

