var minutiInUnOra = 60;
var oraAttuale = new Date();

var minutiMancanti = minutiInUnOra - oraAttuale.getMinutes();

console.log("alla fine della mia ora mancano " + minutiMancanti + " minuti")

console.log(oraAttuale);