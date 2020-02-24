// traer los elementos del documento
// ocultarlos
// poner el boton de inicio junto con un titulo y opciones?
// traer los archivos de audio para efectos de sonidos de botones? (no usar al principio musica de fondo)
// Poner cosas que identifiquen los ataques del enemigo par que gnaro o agustin se den cuenta lo que esta haciendo.


/*
Nitusa: habilidades para el combate o para el mapa?
inicia una pelea?
"Burla": "Probabilidad de desconcentrar al enemigo",
mejores precios con los items?
"Mil y un dialogos": "Imita mil voces distintas, ¿Genial no?"
Le compra al chino y se papotea; si compra el item, desbloquear
la habilidad "papotearse".
*/

/* 
Gnaro: habilidades pasivas?
Lag?: es lento, pero pega.
Tiene un fierro.

*/

let Nitsuga = {
  attacks: {
    // Nombre      Descripcion
    "Puño Sedentario": "Le rompes la jeta ( inflige 10 de daño )",
    "Golpe Bajo": "Inflige 5 de daño, con probabilidad de hacer daño critico si acierta.",
    "Patada del Dragon Tuerto": "Inflige mas daño mientras menos vida tengas, pero mas probable es que falles.",

  },
  specials: {
    "Kamenyameya": "Solo se puede hacer cuando tiene menos de la mitad de la vida, si sale bien el objetivo MUERE.",
    "Rica Hamburguesa": "Recuperas x puntos de vida",
    "¡Do a Barrel Roll!": "¡Gran probabilidad de esquive!",
    "Papotearse": "Te re das con la mejor merca de ituzaingo, ¿Quien sabe los efectos que tendra?"
  }
};

let Gnaro = {
  attacks: {
    "Golpe Duro": "Inflige un moton de daño, solo por ser Gnaro (15 de daño)",
    "¡Dispara!": "Solo tras haber usado Sacando el Fierro, disparas haciendo 25 de daño, consume la bala."
  },
  specials: {
    "Sacando el Fierro": "Sacas la 9mm cargando UNA bala, consume 1 turno, pero tu proximo ataque sera mortifero",
    "Escapar": "Escapas sigilosamente sin que se de cuenta. MUY poco probable",
    "Masticando Plomo": "Consumis una cantidad considerable de polvora, quitandote X vida, potenciando tu proximo"+
    "Golpe Duro",
  }
}

