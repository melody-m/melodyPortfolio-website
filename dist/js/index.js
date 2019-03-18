const DOM = {
    enter: document.querySelector('.landpage__enter--btn'),
    landLeft: document.querySelector('.landpage__left'),
    landRight: document.querySelector('.landpage__right')
}


DOM.enter.addEventListener('click',() => {
    DOM.enter.style.visibility = "hidden";
    DOM.landLeft.style.transform = "translateX(-100%)";
    DOM.landRight.style.transform = "translateX(100%)";
})