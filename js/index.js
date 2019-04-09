// Your code goes here
const navigation = document.querySelector('.main-navigation');
const firstImg = document.querySelector('.content-section img');
const secondImg = document.querySelector('.img-fluid');
navigation.addEventListener('click',(e)=>{
    e.preventDefault();
    navigation.style.backgroundColor = 'black'
    console.log(navigation.firstElementChild);
    
    navigation.firstElementChild.style.color = 'white';
    document.querySelectorAll('.main-navigation a').forEach(link=>link.style.color = 'white');
    
})

navigation.addEventListener('dblclick',()=>{
    navigation.style.backgroundColor = 'white';
    navigation.firstElementChild.style.color = 'black';
    document.querySelectorAll('.main-navigation a').forEach(link=>link.style.color = 'black');
})

function imgMoverLeft(elem) { 
    let position = 200;
    elem.style.position = 'absolute';
    elem.style.zIndex = '-1';
    elem.style.width = "300px";
    const id = setInterval(frame, 1);
    function frame() {
      if (position == 800) { 
        clearInterval(id);
        
      } else {
        position+=2; 
        
        elem.style.left = position + "px"; 
      }
    }
  }
function imgMoverRight(elem) { 
    let position = 200;
    elem.style.position = 'absolute';
    elem.style.zIndex = '-1';
    elem.style.width = "300px";
    const id = setInterval(frame, 1);
    function frame() {
      if (position == 800) { 
        clearInterval(id);
        
      } else {
        position+=2; 
        
        elem.style.right = position + "px"; 
      }
    }
  }
  
  firstImg.addEventListener('click',imgMoverLeft(firstImg));
  secondImg.addEventListener('click',imgMoverRight(secondImg));

  window.addEventListener('keydown', (e)=> {
      navigation.innerHTML+=(`<h3> PRESSING  ${e.key}</h3> \n`)
      navigation.style.fontSize = "2rem"
    });
let secondImgPos = 0;
secondImg.style.maxWidth = '900px'
  secondImg.addEventListener('drag', (e)=>{
    e.preventDefault();
  });
  secondImg.addEventListener('dragenter',(e)=>{
      secondImg.style.display = 'none';
  })
  secondImg.parentElement.addEventListener('dragend', ()=> secondImg.style.display = 'block');

  const button = document.querySelectorAll('.btn');
  button[0].addEventListener('mouseout', ()=>button[0].style.backgroundColor ='black');
  button[1].addEventListener('mouseover',()=> {
    button[1].style.position= 'relative';
      button[1].style.bottom = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*4)}${Math.floor(Math.random()*9)}px`
      button[1].style.left = `${Math.floor(Math.random()*4)}${Math.floor(Math.random()*3)}${Math.floor(Math.random()*2)}px`
})



//resize event
const delay = 100; 
const originalResize = evt => {
  console.log(evt);  // Your resize function here
  
  const hexColor = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*4)}${Math.floor(Math.random()*9)}`;
  document.querySelector('body').style.background = hexColor;
  navigation.style.background = hexColor;
  if(navigation.style.width > 900){
    document.querySelector('body').style.background = 'white';
    navigation.style.background = 'white';
  }
};



(() => {
  resizeTaskId = null;

  window.addEventListener('resize', evt => {
    if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }
    resizeTaskId = setTimeout(() => {
      resizeTaskId = null;
      originalResize(evt);
    }, delay);
  });
})();//end resize event
  