// Chiedi all’utente la sua email;
// controlla che sia nella lista di chi può accedere;
// stampa un messaggio appropriato sull’esito del controllo.

// variables

var emailList = ["lucaciprani@libero.it", "emaildefault@hotmail.it", "emailstandard@gmail.com", "emaillibera@virgilio.com","email5@prova.it","email6@prova.it","email7@prova.it","email8@prova.it"];

var emailUtente = prompt("Inserisci la tua email");
console.log(emailUtente);
var trovato = false;

for (var i = 0; i < emailList.length; i++) {  

    if(emailUtente == emailList[i] && "@") {
        console.log("In lista può entrare");
        trovato = true;
    }
}

if (trovato == false) {
    console.log("Non in lista");
}

// console 
console.log(trovato);
