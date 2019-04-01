import * as landpage from './views/landpageView';
import * as windowUI from './views/windowView';
import * as skill from './views/skillView';
import * as project from './views/projectView';



const projectDisplay = [];

function setEventListeners(){

  window.addEventListener("load", () => {
    const loader = document.querySelector('.load');
    loader.style.display = "none";
  });

  landpage.DOM.enter.addEventListener('click',() => {
    landpage.displayLandpage();
  })

  windowUI.getMatch();

  windowUI.windowBtnArr.forEach((cur) => {
    cur.addEventListener('click', () => {  
      windowUI.rotateOpen(cur);
    })
  })
  
  windowUI.windowCloseBtnArr.forEach((cur) => {
    cur.addEventListener('click', () => {  
      windowUI.rotateClose(cur);
    })
  })

  
  document.addEventListener('scroll', function() {
    skill.displaySkill();
  }, {capture: false, passive: true});
  
  
  project.projectSetUp();

  project.galleryBtnArr.forEach((cur) =>{    
    cur.addEventListener('click', () => {
      const projCont = project.projectMap.get(cur);
      projectDisplay.push(projCont);

      projCont.displayContainer();
      projCont.setUpMedia();
      projCont.displayMedia();
    })
  })

  const sliderOpen = document.querySelectorAll('.project__extra--btn');
  const sliderOpenArr = Array.from(sliderOpen);

  sliderOpenArr.forEach((cur) => {
    cur.addEventListener('click', () =>{
      projectDisplay[0].displaySlider();
    })
  })

  const sliderDown = document.querySelectorAll('.slider__arrow--btn');
  const sliderDownArr = Array.from(sliderDown);

  sliderDownArr.forEach((cur) => {
    cur.addEventListener('click', () =>{
      projectDisplay[0].hideSlider();
    })
  })

  const projectCloseBtn = document.querySelectorAll('.project__close');
  const projectCloseArr = Array.from(projectCloseBtn);
  
  projectCloseArr.forEach((cur) =>{
    cur.addEventListener('click', () => {
    projectDisplay[0].closeContainer();
    projectDisplay.pop();
    })
  })
}


function init() {
  setEventListeners();
}

init();