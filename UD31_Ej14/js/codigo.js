window.onload = function(){ 
  pantalla = document.getElementById("Pantalla"); 
  }
  x = "0"; 
  cantidad = 1; 
  coma = 0; 
  ni = 0; 
  op = "no"; 

function borrarUltimoNum(){ 
    num_cifra = x.length; 
    br = x.substr(num_cifra - 1, num_cifra) 
    x = x.substr(0, num_cifra - 1) 
    if (x == "") {
      x = "0";
    } 
    if (br == ".") {
      coma = 0;
    } 
    pantalla.innerHTML = x; 
  }

function borrarParcial() {
    pantalla.innerHTML = 0; 
    x = 0; 
    coma = 0;					
  }

  function borrarTotal() {
    pantalla.innerHTML = 0; 
    x = "0"; 
    coma = 0; 
    ni = 0; 
    op = "no"; 
  }

  function numero(num) { 
    if (x == "0" || cantidad == 1  ) {	
      pantalla.innerHTML = num;
      x = num; 
      if (num == ".") { 
          pantalla.innerHTML = "0."; 
          x = num; 
          coma = 1; 
          }
      }
    else { 
      if (num == "." && coma == 0) { 
          pantalla.innerHTML += num;
          x += num;
          coma = 1; 
      }
    
      else if (num == "." && coma == 1) {} 
      
      else {
          pantalla.innerHTML += num;
          x += num
      }
    }
    cantidad = 0 
    }
  function operar(s) {
      igualar() 
      ni = x 
      op = s;
      cantidad = 1; 
    }	
  function igualar() {
    if (op == "no") {
      pantalla.innerHTML = x;	
      }
    else { 
      sl = ni + op + x; 
      sol = eval(sl) 
      pantalla.innerHTML = sol 
      x = sol; 
      op = "no"; 
      cantidad = 1; 
      }
    }   

    function raizcuadrada() {
      x = Math.sqrt(x) 
      pantalla.innerHTML = x; 
      op = "no"; 
      cantidad = 1; 
    }
    function porciento() { 
      x = x/100 
      pantalla.innerHTML = x; 
      igualar() 
      cantidad = 1 
    }
    function opuesto() { 
      nx = Number(x); 
      nx = -nx; 
      x = String(nx); 
      pantalla.innerHTML = x;
    }
    function reiniciar() {
      nx=Number(x);
      nx=(1/nx);
      x=String(nx);		 
      pantalla.innerHTML=x;
      cantidad=1; 
    }

