// Il Programma deve Chiedere all’utente la sua email, e controllare che sia nella lista di chi può accedere.
// stampare un messaggio appropriato sull’esito del controllo.

let email = prompt("Inserisci la tua  email");

console.log( email);


const myList = ["furkan01@gmail.com", "alessandro98@gmail.com", "luca92@gmail.com"];

for (let index = 0; index <  myList.length; index++) {
    if (email ===  myList[index]) {

        console.log(`Ciao ${myList[index]} la tua mail c'è nella lista `);
        
    }
    
}




