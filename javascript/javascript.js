/*
**javascript
**/



 // variabili //
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
 var tries = 84;


 while(scelta.length < tries){
      var num = parseInt(prompt("Scegli un numero compreso tra 1 e 100 e non duplicarli"));

      if( ! scelta.includes(num)){
        scelta.push(num);
      }
 }

 console.log(scelta)



 function random(min,max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
