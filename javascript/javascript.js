/*
**javascript
**/




var difficolta = parseInt(prompt("scegli un livello di difficolta \n0 \n1 \n2").trim());

while((isNaN(difficolta) === true) || (difficolta > 2) || (difficolta < 0)  ){
      var difficolta = parseInt(prompt("pui per favore scegiere un numero compreso da 0 e 2 ?"));
}

console.log(difficolta)
 var max = "";

switch (difficolta) {
  case 0:
    var tries = 84;
    var max = 100;
    var contatore = 1;
    break;
    case 1:
    var max = 80;
    var tries = 64;
    var contatore = 1;
    break;
    case 2:
    var max = 50;
    var tries = 34;
    var contatore = 1;
    break;
  default:

}





 var bombe = [];
 var numerobombe = 16;

 while(bombe.length < numerobombe){
      var number = random(1, 100);

      if(! bombe.includes(number)){
        bombe.push(number);
      }
 }

 console.log(bombe)

 var scelta = [];
 // var tries = 84;


 while( scelta.length < tries){
      var num = parseInt(prompt("Scegli un numero compreso tra 1 "+max+" duplicarli") );

      if( ! scelta.includes(num)){
        scelta.push(num);
      } else{
        var num = parseInt(prompt("Per favore non ripetere i numeri") );
      }

      if(bombe.includes(num) === true){
        alert("hai perso");
        break;
      } else{
        alert("continua a scegliere il numero");
      }

      if(tries == contatore){
        alert("hai vinto il gioco")
      }
      console.log(num);
      console.log(tries);
      console.log(contatore)
      ++contatore;
 }

 console.log(scelta);





 // for(var i = 0; scelta.length < i; i++ ){
 //     if(bombe.includes(num))
 //
 // }







 function random(min,max){
      var rand = Math.floor(Math.random() * (max - min + 1) ) + min;

      return rand;
 }
