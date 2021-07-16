// Generare un numero random da 1 a 6, sia per il giocatore sia per il king.

var king = Math.floor(Math.random() * 7);
console.log(king);

document.getElementById("king").innerHTML = "King " + king;

var queen = Math.floor(Math.random() * 7);
console.log(queen);

document.getElementById("queen").innerHTML = "Queen " + queen;

var jack = Math.floor(Math.random() * 7);
console.log(jack);

document.getElementById("jack").innerHTML = "Jack " + jack;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(king > queen && king > jack) {
    console.log("king vince");
    document.getElementById("kingvincente").innerHTML = "King vince la partita";
    
} else if(queen > king && queen > jack){
    console.log("queen vince");
    document.getElementById("queenvincente").innerHTML = "Queen vince la partita";

} else if (jack > queen && jack > king){
    console.log("jack vince");
    document.getElementById("jackvincente").innerHTML = "Jack vince la partita";

} else if (jack == queen && jack == king){
    console.log("parità");
    document.getElementById("parità").innerHTML = "Parità";

} else {
    console.log("non definito");
    document.getElementById("nodefined").innerHTML = "Spareggi ";
}





