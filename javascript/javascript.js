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



 function random(min,max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
