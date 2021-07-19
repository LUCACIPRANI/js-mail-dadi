// 1.  Chiedi all’utente la sua email;

var emailUtente = prompt("Insert your email ");

document.getElementById("email").innerHTML = "Your email is: " + emailUtente;

console.log(emailUtente);

// 2. controlla che sia nella lista di chi può accedere;
 
var emailList = ["lucaciprani@libero.it", "emaildefault@hotmail.it", "emailstandard@gmail.com", "emaillibera@virgilio.com","email5@prova.it","email6@prova.it","email7@prova.it","email8@prova.it"];

var trovato = false;

for (var i = 0; i < emailList.length; i++) {  

    if(emailUtente == emailList[i] && "@"){
        trovato = true ;
    }
}

// 3.  stampa un messaggio appropriato sull’esito del controllo.

if (trovato == false) {
    console.log("Non in lista");
    document.getElementById("non_in_lista").innerHTML = "Is it on the list ? " + trovato;
} else{
    console.log("In lista può entrare");
    document.getElementById("in_lista").innerHTML = "Is it on the list ? " + trovato;
}

//  console 
console.log(trovato);
