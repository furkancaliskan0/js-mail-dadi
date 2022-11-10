//Generare un numero random da 1 a 6,
//sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


let myNumber= Math.floor((Math.random)() * 6 )+ 1;

console.log("numero del giocatore ", myNumber)

let numberComputer= Math.floor((Math.random)() * 6 )+ 1;

console.log("numero del computer ", numberComputer)



if (myNumber > numberComputer){
    console.log("hai vinto il giocatore ");
} else{ 
    console.log("ha perso il giocatore, ha vinto il computer ");
}






