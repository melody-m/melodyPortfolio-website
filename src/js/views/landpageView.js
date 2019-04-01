
export const DOM = {
    enter: document.querySelector('.landpage__enter--btn'),
    landpage: document.querySelector('.landpage'),
    landBlockW:document.querySelector('.landpage__title--blockW'),
    landBlockG:document.querySelector('.landpage__title--blockG'),
    landName: document.querySelector('.landpage__title--name'),
    landFrame: document.querySelector('.landpage__title--frame'),
    landTitle: document.querySelector('.landpage__container'),
    landLeft: document.querySelector('.landpage__left'),
    landRight: document.querySelector('.landpage__right'),
    aboutCont: document.querySelector('.about__container'),
    hidden: document.querySelectorAll('.hidden')
};


export function displayLandpage(){

    const hiddenCont = Array.from(DOM.hidden);

    hiddenCont.forEach((cur) => {
        cur.classList.remove('hidden');
    });
    
    DOM.landName.style.transform = "translate(-50%,-80rem)";
    DOM.enter.style.opacity = "0";
    DOM.landFrame.style.opacity = "0";
    DOM.landBlockW.style.transform = "translateX(-80rem)";
    DOM.landBlockG.style.transform = "translateX(80rem)";
    DOM.landLeft.style.transform = "translateX(-100%)";
    DOM.landRight.style.transform = "translateX(100%)";

    setTimeout(() => {
        DOM.landTitle.style.visibility = "hidden";
        const slidersL = DOM.aboutCont.querySelectorAll('.slideOutLeft');
        const slidersR = DOM.aboutCont.querySelectorAll('.slideOutRight');
        const slidersLArr = Array.from(slidersL);
        const slidersRArr = Array.from(slidersR);

        slidersLArr.forEach((cur) => {
            cur.classList.remove('slideOutLeft');
            cur.classList.add('slideIn');
        });
        slidersRArr.forEach((cur) => {
            cur.classList.remove('slideOutRight');
            cur.classList.add('slideIn');
        })
    }, 300);

    setTimeout(() => {
        DOM.landpage.classList.add('hidden');
    }, 600)
}
