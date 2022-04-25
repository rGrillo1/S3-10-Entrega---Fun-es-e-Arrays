function position(primeiroLugar, segundoLugar, terceiroLugar) {

   let corrida = [primeiroLugar, segundoLugar, terceiroLugar]
 
 
   for (i = 0; i < corrida.length; i++) {
     if (corrida[i] == 'Daniel' && i > 0) { 
         let anterior = corrida[i - 1];
         corrida[i - 1] = corrida[i] 
         corrida[i] = anterior;
     }
   }
   console.log(corrida)
 
 }
 
 position('Rafael', 'Miguel', 'Daniel');
 position('Daniel', 'Rafael', 'Miguel')
 position('Rafael', 'Daniel', 'Miguel')