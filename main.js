
 function onBallClick(){
  const elBall= document.querySelector('.ball')
  var increment=getRandomInt(20,61)
  var  diameter=+elBall.innerText+increment
  console.log(diameter)
  elBall.innerText=diameter
  elBall.style.width=`${diameter}`;
  elBall.style.height=`${diameter}`;
  console.log(elBall.style.width)
 }
//  function limitSize(){
//    const elBall= document.querySelector('.ball')
//    if(elBall.style.width>400){
//     elBall.style.width>400
//     elBall.style.hight>400
//    }
//  }