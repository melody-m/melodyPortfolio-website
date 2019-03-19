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
  