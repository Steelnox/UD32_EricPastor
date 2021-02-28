function dados(){
   var dado1, dado2, resultado;
   var lista_frec = [0,0,0,0,0,0,0,0,0,0,0];
   for (var i = 1; i < 36000; i++) {
           dado1 = Math.floor(6 * Math.random()) + 1;
           dado2 = Math.floor(6 * Math.random()) + 1;
           resultado = dado1 + dado2;
           lista_frec[resultado - 2]++;
   }
   for (var i = 0; i < lista_frec.length; i++) {
       document.writeln('Cara : '+ (i + 2)+ ' numero de veces '+ lista_frec[i]+'<br>');       
   }
}