// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var computer = Math.floor(Math.random() * 7);
console.log(computer);

document.getElementById("computer").innerHTML = "Computer " + computer;

var Alberto = Math.floor(Math.random() * 7);
console.log(Alberto);

document.getElementById("alberto").innerHTML = "Alberto " + Alberto;

var franco = Math.floor(Math.random() * 7);
console.log(franco);

document.getElementById("franco").innerHTML = "Franco " + franco;

var vincente = "la partita";

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(computer > Alberto && computer > franco) {
    console.log("computer vince");
    document.getElementById("computervincente").innerHTML = "Computer vince la partita";
    
} else if(Alberto > computer && Alberto > franco){
    console.log("Alberto vince");
    document.getElementById("albertovincente").innerHTML = "Alberto vince la partita";

} else if (franco > Alberto && franco > computer){
    console.log("Franco vince");
    document.getElementById("francovincente").innerHTML = "Franco vince la partita";

} else if (franco > Alberto && franco > computer){
    console.log("parità");
    document.getElementById("fparità").innerHTML = "Parità";

} else {
    console.log("non definito");
    document.getElementById("nodefined").innerHTML = "Spareggi ";
}





