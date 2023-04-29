

const eyesNode = document.getElementById('eyes');

for (let i=0;i<=1;i++){
  var eyeArray = [];
  eyeArray[i] = document.createElement("div");
  eyeArray[i].classList.add('eye');
  eyesNode.appendChild(eyeArray[i]);
  
  var ballArray = []
  ballArray[i] = document.createElement("div");
  ballArray[i].classList.add('ball');
  eyeArray[i].appendChild(ballArray[i]);
  //console.log(ojos);

  document.getElementById('eyes').style.verticalAlign = "middle";
  document.getElementById('eyes').style.left = "28%";
  document.getElementById('eyes').style.position = "absolute";
  document.getElementById('eyes').style.top = "35%";
}

const balls = document.getElementsByClassName('ball');

  //const neweye = document.createElement("div");
  //neweye.classList.add('eye','ball');
  //balls.


document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for(let i = 0;i<=1;i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';

  }


};
