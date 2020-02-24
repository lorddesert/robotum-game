export const kamenyameya = (myLife) => {
  if(myLife <= 50) {
    let dmg = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log("el numero que salio es: " + dmg);
    return dmg;
  }
  else return 0;
}

export const deliciousHamburger = uses => {
  if(uses > 0) {
    return -15;
  }
  else return null;
}

export const barrelRoll = () => {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
