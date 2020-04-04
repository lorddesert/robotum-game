function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const makeChoice = (bullet, name, lifePoints, RHUses) => {
  // if(bullet)
  //   return "¡Dispara!";
  // else if(!bullet)
  //   return "Sacando el Fierro";

  if(name == "Gnaro") {
    let prob = getRandomInt(0, 100);
    // console.log(`la prob es: ${prob}`);
    if(bullet)
      return "¡Dispara!";

    // else if(bullet == false)
    //   return "Miss"

    else if(prob >= 0 && prob < 25)
      return "Zarandeada";

    else if(prob >= 25 && prob <= 50  && !bullet)
    return "Sacando el Fierro";

    else if(prob >= 50 && prob <= 75)
      return "Tramontina";

    else if (prob > 75)
      return "Rompe Cuellos";
  }
  else if(name == "Nitsuga") {
    let prob = getRandomInt(0, 100);

    if (prob > 75 && lifePoints <= 50)
      return "Kamenyameya";

    else if(prob > 75)
      return "Puño Sedentario"

    else if(prob >= 0 && prob < 25)
      return "Puño Sedentario";

    else if(prob >= 25 && prob <= 45)
    return "Patada del Dragon Tuerto";

    else if(prob >= 25 && prob <= 45)
    return "Papotearse";

    else if(prob >= 50 && prob <= 75 && RHUses)
      return "Rica Hamburguesa";
    else
      return "Puño Sedentario";
  }
}
