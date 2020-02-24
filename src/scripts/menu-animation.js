
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

export function criticAnm (changeDisplay) {
  const critic = document.getElementById("criticMsg");
  critic.style.display = "block"
  setTimeout(changeDisplay, 501);
}

export function changeDisplay() {
  const critic = document.getElementById("criticMsg");
  critic.style.display = "none";
}

