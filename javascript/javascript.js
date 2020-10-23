/*
**javascript
**/









 // var bombe = [];
 // var numerobombe = 16;
 //
 // while(bombe.length < numerobombe){
 //      var number = random(1, 100);
 //
 //      if(! bombe.includes(number)){
 //        bombe.push(number);
 //      }
 // }
 //
 // console.log(bombe)
 //
 // var scelta = [];
 // var tries = 84;
 //
 //
 // while(scelta.length < tries){
 //      var num = parseInt(prompt("Scegli un numero compreso tra 1 e 100 e non duplicarli"));
 //
 //      if( ! scelta.includes(num)){
 //        scelta.push(num);
 //      }
 // }
 //
 // console.log(scelta)
 //
 // if(bombe.includes(num) === true){
 //   alert("hai perso");
 //
 //
 // } else{
 //    alert("hai vinto");
 // }








 // function random(min,max) {
 //   return Math.floor(Math.random() * (max - min + 1) ) + min;
 // }

 // var tries = 0;
 // var number = 0;
 // var num = ("");


 var difficolta = prompt("quale difficolta scegli: \n0 \n1 \n2");

 switch(difficolta) {
   case "0":

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

   if(bombe.includes(num) === true){
     alert("hai perso");


   } else{
      alert("hai vinto");
   }
       break;
   case "1":

   var bombe = [];
   var numerobombe = 16;

   while(bombe.length < numerobombe){
        var number = random(1, 80);

        if(! bombe.includes(number)){
          bombe.push(number);
        }
   }

   console.log(bombe)

   var scelta = [];
   var tries = 64;


   while(scelta.length < tries){
        var num = parseInt(prompt("Scegli un numero compreso tra 1 e 80 e non duplicarli"));

        if( ! scelta.includes(num)){
          scelta.push(num);
        }
   }

   console.log(scelta)

   if(bombe.includes(num) === true){
     alert("hai perso");


   } else{
      alert("hai vinto");
   }
       break;
   case "2":

   var bombe = [];
   var numerobombe = 16;

   while(bombe.length < numerobombe){
        var number = random(1, 50);

        if(! bombe.includes(number)){
          bombe.push(number);
        }
   }

   console.log(bombe)

   var scelta = [];
   var tries = 34;


   while(scelta.length < tries){
        var num = parseInt(prompt("Scegli un numero compreso tra 1 e 80 e non duplicarli"));

        if( ! scelta.includes(num)){
          scelta.push(num);
        }
   }

   console.log(scelta)

   if(bombe.includes(num) === true){
     alert("hai perso");


   } else{
      alert("hai vinto");
   }
        break;

 }


 function random(min,max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
