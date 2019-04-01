const windowDOM = {
  window : document.querySelectorAll('.window'),
  windowBtn : document.querySelectorAll('.window__front--btn'),
  close : document.querySelectorAll('.window__back--close-btn')
};


export const windowArr = Array.from(windowDOM.window);
export const windowBtnArr = Array.from(windowDOM.windowBtn);
export const windowCloseBtnArr = Array.from(windowDOM.close);


const windowSlider = new Map();


export function getMatch() {
    for (let i=0; i < windowBtnArr.length; i++){
        const buttons = [windowBtnArr[i].id,windowCloseBtnArr[i].id];
        windowSlider.set(windowArr[i].id, buttons);
    }
}


export function rotateOpen(object){
    windowSlider.forEach((value, key) => {
        // Select the open button
        if(value[0] === object.id){
          const slider = document.getElementById(key);
          slider.querySelector('.window__side--front').style.transform="rotateY(-180deg)";
          slider.querySelector('.window__side--back').style.transform="rotateY(0deg)";
        }
    })
}


export function rotateClose(object){
    windowSlider.forEach((value, key) => {
        // Select the close button
        if(value[1] === object.id){
          const slider = document.getElementById(key);
          slider.querySelector('.window__side--front').style.transform="rotateY(0deg)";
          slider.querySelector('.window__side--back').style.transform="rotateY(180deg)";
        }
    })
}
