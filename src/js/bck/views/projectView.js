
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
      this.slider = this.container.querySelector('.slider__research');
    }
  
    displayContainer(){
  
      document.querySelector('body').style.overflow = "hidden";
  
      document.querySelector('.project').style.height = "100%";
    
      this.container.classList.remove('projectHidden');
        
      setTimeout(() =>{
        this.leftSide.classList.remove('slideOutLeft');
        this.leftSide.classList.add('slideIn');
        this.rightSide.classList.remove('slideOutRight');
        this.rightSide.classList.add('slideIn');
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
  
    displaySlider(){
      this.slider.classList.remove("researchSlide");
    }
  
    hideSlider(){
      this.slider.classList.add("researchSlide");
    }
  
  
    closeContainer(){
      this.leftSide.classList.remove('slideIn');
      this.leftSide.classList.add('slideOutLeft');
      this.rightSide.classList.remove('slideIn');
      this.rightSide.classList.add('slideOutRight');
  
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

export const projectMap = new Map();
const projectObj = [];
const galleryBtn = document.querySelectorAll('.gallery__link');
export const galleryBtnArr = Array.from(galleryBtn);

export function projectSetUp(){
    const projectCont = document.querySelectorAll('.project__container');
    const projectContArr = Array.from(projectCont);
  
    projectContArr.forEach((cur) => {
      const id = cur.id;
      const projectView = new Project(id);
      projectObj.push(projectView);    
    })
  
    for (let i=0; i < galleryBtnArr.length; i++){
      projectMap.set(galleryBtnArr[i], projectObj[i])
    }
  }
  