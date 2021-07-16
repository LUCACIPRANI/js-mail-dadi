// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var computer = Math.floor(Math.random() * 7);
console.log(computer);

document.getElementById("computer").innerHTML = "Risultato Computer " + computer;

var giocatore = Math.floor(Math.random() * 7);
console.log(giocatore);

document.getElementById("giocatore").innerHTML = "Risultato Giocatore " + giocatore;

var vincente = "la partita";

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(computer > giocatore){
    console.log("computer vince");
    document.getElementById("computervincente").innerHTML = "Computer vince " + vincente;
    
} else if (computer < giocatore){
    console.log("giocatore vince");
    document.getElementById("giocatorevincente").innerHTML = "Giocatore vince " + vincente;
} 
else {
    console.log("parità");
    document.getElementById("parità").innerHTML = "Parità ";

}





