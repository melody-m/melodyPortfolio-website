const DOM = {
    enter: document.querySelector('.landpage__enter--btn'),
    landpage: document.querySelector('.landpage'),
    landBlockW:document.querySelector('.landpage__title--blockW'),
    landBlockG:document.querySelector('.landpage__title--blockG'),
    landName: document.querySelector('.landpage__title--name'),
    landFrame: document.querySelector('.landpage__title--frame'),
    landTitle: document.querySelector('.landpage__container'),
    landLeft: document.querySelector('.landpage__left'),
    landRight: document.querySelector('.landpage__right'),
    aboutPhoto: document.querySelector('.about__photo'),
    aboutTitle: document.querySelector('.about__title'),
    aboutContent: document.querySelector('.about__content'),
    hidden: document.querySelectorAll('.hidden')

}

const hiddenCont = Array.from(DOM.hidden);

DOM.enter.addEventListener('click',() => {

    hiddenCont.forEach((cur) => {
        cur.classList.remove('hidden');
    })

    DOM.landName.style.transform = "translate(-50%,-80rem)";
    DOM.enter.style.opacity = "0";
    DOM.landFrame.style.opacity = "0";
    DOM.landBlockW.style.transform = "translateX(-80rem)";
    DOM.landBlockG.style.transform = "translateX(80rem)";
    DOM.landLeft.style.transform = "translateX(-100%)";
    DOM.landRight.style.transform = "translateX(100%)";
        setTimeout(() => {
            DOM.landTitle.style.visibility = "hidden"; 
            DOM.aboutPhoto.classList.replace('slideOutLeft','slideIn');
            DOM.aboutTitle.classList.replace('slideOutRight','slideIn');
            DOM.aboutContent.classList.replace('slideOutRight','slideIn');
            
        }, 300);

        setTimeout(() => {
            DOM.landpage.classList.add('hidden');
        }, 600)

})

/////////////////////////////////////////////////////////////////////////////////////////////////

const windowDOM = {
    window : document.querySelectorAll('.window'),
    windowBtn : document.querySelectorAll('.window__front--btn'),
    close : document.querySelectorAll('.window__back--close-btn')
  }
  
  const windowArr = Array.from(windowDOM.window);
  const windowBtnArr = Array.from(windowDOM.windowBtn);
  const windowCloseBtnArr = Array.from(windowDOM.close);
  
  
  const windowSlider = new Map();
  
  function getMatch(){   
    for (let i=0; i < windowBtnArr.length; i++){
      const buttons = [windowBtnArr[i].id,windowCloseBtnArr[i].id];
      windowSlider.set(windowArr[i].id, buttons);
    }
  }
  
  getMatch();
  
  windowBtnArr.forEach((cur) => {
    cur.addEventListener('click', () => {
  
      windowSlider.forEach((value, key) => {
  
        if(value[0] === cur.id){
          const slider = document.getElementById(key);
          slider.querySelector('.window__side--front').style.transform="rotateY(-180deg)";
          slider.querySelector('.window__side--back').style.transform="rotateY(0deg)";
        }
      })
    })
  })
  
  windowCloseBtnArr.forEach((cur) => {
    cur.addEventListener('click', () => {
  
      windowSlider.forEach((value, key) => {
        if(value[1] === cur.id){
          const slider = document.getElementById(key);
          slider.querySelector('.window__side--front').style.transform="rotateY(0deg)";
          slider.querySelector('.window__side--back').style.transform="rotateY(180deg)";
        }
      })
    })
  })
  
//////////////////////////////////////////////////////////////////////////////



const galleryBtn = document.querySelectorAll('.gallery__link');
const galleryBtnArr = Array.from(galleryBtn);
const projectCont = document.querySelectorAll('.project__container');
const projectContArr = Array.from(projectCont);
const projectCloseBtn = document.querySelectorAll('.project__close');
const projectCloseArr = Array.from(projectCloseBtn);
const projectObj = [];
const projectMap = new Map();
const projectDisplay = [];

class Project{
  constructor(id){
    this.container = document.getElementById(id);
    this.closeBtn = document.querySelector('.project__close');
    this.leftSide = this.container.querySelector('.project__column--left');
    this.rightSide = this.container.querySelector('.project__column--right');
    this.mediaBtn = this.container.querySelectorAll('.project__btn');
    this.mediaDesktop =  this.container.querySelector('.project__btn--desktop');
    this.mediaCont =  this.container.querySelectorAll('.project__device');
    this.mediaBtnArr = Array.from(this.mediaBtn);
    this.mediaContArr = Array.from(this.mediaCont);
    this.media = new Map();
  }

  displayContainer(){

    document.querySelector('body').style.overflow = "hidden";

    document.querySelector('.project').style.height = "100%";
  
    this.container.classList.remove('projectHidden');
      
    setTimeout(() =>{
      this.leftSide.classList.replace('slideOutLeft','slideIn');
      this.rightSide.classList.replace('slideOutRight','slideIn');
    }, 300);
  
  }

  setUpMedia(){    
  
    for (let i=0; i < this.mediaBtnArr.length; i++){
      this.media.set(this.mediaBtnArr[i], this.mediaContArr[i]);
    }
  }

  hideMedia(){
    this.mediaContArr.forEach((cur) =>{
      cur.classList.add('mediaHidden');
    })
  }

  resetMediaIcons(){
    const icons = this.container.querySelectorAll('svg');
    const iconsArr = Array.from(icons);
    iconsArr.forEach((cur)=>{ 
      cur.style.fill = "#FFFFFF";
    })

  }
  displayMedia(){

    this.mediaBtnArr.forEach((cur) => {
    cur.addEventListener('click', () => {

      this.resetMediaIcons();

      const iconSelect = cur.querySelector('.device-icon');
      iconSelect.style.fill = "#ff4545";

      this.hideMedia();

      const selector = this.media.get(cur);
      selector.classList.remove('mediaHidden');
      })
    })  
  }

  setDesktopDevice(){
    const selector = this.media.get( this.mediaDesktop);
    selector.classList.remove('mediaHidden');
    this.resetMediaIcons();

    const icon = this.mediaDesktop.querySelector('.device-icon');
    icon.style.fill = "#ff4545";
  }


  closeContainer(){
    this.leftSide.classList.replace('slideIn','slideOutLeft');
    this.rightSide.classList.replace('slideIn','slideOutRight');

    setTimeout(() =>{
      document.querySelector('.project').style.height = "0";  
      document.querySelector('body').style.overflow = "visible";         
    }, 300);

    setTimeout(() =>{     
      this.container.classList.add('projectHidden'); 
      this.hideMedia();
      this.setDesktopDevice();   
    }, 800);

  }
}

function projectSetUp(){
  projectContArr.forEach((cur) => {
    const id = cur.id;
    const projectView = new Project(id);
    projectObj.push(projectView);    
  })

  for (let i=0; i < galleryBtnArr.length; i++){
    projectMap.set(galleryBtnArr[i], projectObj[i])
  }
}

function setEventListeners(){
  projectSetUp();

  galleryBtnArr.forEach((cur) =>{
    cur.addEventListener('click', () => {
      const projCont = projectMap.get(cur);
      projectDisplay.push(projCont);

      projCont.displayContainer();
      projCont.setUpMedia();
      projCont.displayMedia();
    })
  })

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