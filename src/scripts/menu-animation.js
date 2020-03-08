
export function myBtn(myFunc) {
  const anim = document.getElementById("Anim");
  const anim2 = document.getElementById("Anim-2");
  const animCont = document.getElementById("Anim-container");
  animCont.style.display="flex"
  anim.style.display="block";
  anim2.style.display="block";

  setTimeout(myFunc, 1500);
}

export function myAnm () {
  const anim = document.getElementById("Anim");
  const anim2 = document.getElementById("Anim-2");
  const animCont = document.getElementById("Anim-container");

  animCont.style.display="none"
  anim.style.display="none";
  anim2.style.display="none";

}

export function criticAnm(changeCritDisplay) {
  const critic = document.getElementById("criticMsg");
  critic.style.display = "block"
  setTimeout(changeCritDisplay, 501);
}

export function missAnm(changeMissDisplay) {
  const miss = document.getElementById("missMsg");
  miss.style.display = "block"
  setTimeout(changeMissDisplay, 501);
}

export function changeCritDisplay() {
  const critic = document.getElementById("criticMsg");
  critic.style.display = "none";
}
export function changeMissDisplay () {
  const miss = document.getElementById("missMsg");
  miss.style.display = "none";
}

export function changePlayersDisplay(player) {
  if(player == '1') {
    document.getElementById("playerImg-1").style.opacity = "0";
    document.getElementById("lifeMeter-1").style.opacity = "0";
  }
  else {
    document.getElementById("playerImg-2").style.opacity = "0";
    document.getElementById("lifeMeter-2").style.opacity = "0";
  }

}

