
function isInViewport(elem){
    //get position data of element in the page
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
export function displaySkill(){
  const skill = document.querySelector('.skill__title');
  const DOMskills = document.querySelectorAll('.skill__item');
  const skillListArr = Array.from(DOMskills);
  const skillLines = document.querySelectorAll('.skill__item--line');
  const skillLinesArr = Array.from(skillLines);

  if (isInViewport(skill)) {
    for (var i = 0; i < skillListArr.length; i++) {
      ((i) => {
        setTimeout(function () {
          // skillListArr[i].className = skillListArr[i].className.replace('visibility','slideUp');
          skillListArr[i].classList.remove('visibility');
          skillListArr[i].classList.add('slideUp');

        }, 300*i);
      })(i);
    }  
    for (var i = 0; i < skillLinesArr.length; i++) {
      ((i) => {
        setTimeout(function () {
          skillLinesArr[i].style.height = "5rem";
        }, 200*i);
      })(i);
    }  
  }
}