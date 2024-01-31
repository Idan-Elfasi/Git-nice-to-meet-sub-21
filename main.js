
 function onBallClick(){
  const elBall= document.querySelector('.ball')
  var increment=getRandomInt(20,61)
  var  diameter=+elBall.innerText+increment
  console.log(diameter)
  elBall.innerText=diameter
  elBall.style.width=diameter+'px'
  elBall.style.height=diameter+'px'
  var randColor=getRandomColor()
  elBall.style.backgroundColor=randColor
  

 }
//  function limitSize(){
//    const elBall= document.querySelector('.ball')
//    if(elBall.style.width>400+'px'){
//     elBall.style.width>400
//     elBall.style.hight>400
//    }
//  }