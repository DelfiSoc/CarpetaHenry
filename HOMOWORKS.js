console.log(doWhile(0))

function doWhile(num) {
var veces = 0;
   do {
      num += 5;
      veces++;
   } while (veces < 8);
   return num; 
}

//function nombreDeLafuncion(argumento1, argumento2, argumento3) {
    //codigo de la funcion
//}

//nombreDeLafuncion(-1, 2, 'strings', false//booleanos);
//nombreDeLafuncion(null, undefined);

//null = nada
//undefined = indefinido

//las funciones siempre retornar algo

//EXPRESIONES 
1 < 2 // true
1 = 2 //false


//FLUJOS DE CONTROL
//statements, no tiene un resultado
//if(condicion) {
    //codigo
//}
// } else

if(1 < 2) {
    console.log('uno es menor que dos')
}
//VERACIDAD
//Datos que son forzados a verdaderos / 'true'
1
""
//[] // un array
//{} // un objeto
//function

//Datos que son forzados a falsos
//false
//0
//undefined
//null
//' ' // una cadena vacia


if (0) {
    console.log('este codigo se ejecuta si es true');
} else {
    console.log('este codigo se ejecuta si el false')
}

//probamos con 10 = true, -10 = true y 0 false
//todos los numeros son true, excepto el 0 para JS

//todas las strings son true, excepto el string vacio: ' ', " "

//OPERADOR: Negacion ! (NOT)
//true > true
//!true > false
//!!true > true
//!(1>2) > true (deberia ser false)


//COMPARACIONES
1 < 1 //false
1 <= 1 // true
2 >= 1 // true

//PARTICULARIDADES
1 == 1 //true
1 == '1' // true (deberia ser falso, ya que deberiamos comparar tipod de datos iguales)
//JS cambia un numero a string y que es mas facil agregando comillas

//el triple === compara el valor y el tipo de dato
//el doble == solo compara el valor
// 1 !== 2

//OPERADORES LOGICOS

//matematica para los opadores booleanos, los que vamos a usar
//AND Y   &&
//OR  O   ||
//NOT NO  !


    //(!a || !b) <==> a && b
// T T  F F     F   T
// T F  F T     T   F
// F T  T F     T   F
// F F  T T     T   F

//BUCLES

//DRY Code (Don't Repeat Yourself) NO TE REPITAS


//imprimir los numeros del 1 al 10 (done)

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//imprimir los numeros del 1 al 100 ??

//funcion que imprima los numero del 1 a N (que pasa por argumento)
//if (N >= 1) {
  //  console.log(1);
//}
//if (N >= 2) {
  //  console.log(2);
//}

//esto tampoco sirve, necesitamos algo que sea programatico 
//que nos ayude a no repetirnos

//Bucle for (repetir un bloque de codigo muchas veces)

for(var i = 0; i < 10; i++) {
    console.log(i)
}

//Tiene 3 partes
// 1. for(var i = 0;) la variable que va a utilizar para contar la cantidad de rep que va haciendo.
// 2. for(var i = 0; i <= 100; ) condicion de frenado, cuando queres que deje de ejecutarse
// 3. for(var i = 0; i <= 100; i++) el paso, como quqeres que se vaya incrementado este valor

// ejemplo: imprimi los numeros del 1 al 100

for(var i = 1; i <= 100; i++) {
    console.log(i)
}

function imprime1aN(n) {
 for(var i = 1; i <= n; i++) {
    console.log(i);
}
}

 //ejemplo: imprimir solo numeros pares del 1 al 100

 function imprime1aN(n) {
    for(var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
 }



// imprime numeros pares solo hasta 200

 function imprime1aN(n) {
    for(var i = 1; i <=n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
        if(i > 200) {
            return;
        }
    }
 }

 //agregamos otra variable

 function imprime1aN(n) {
    for(var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
        if(i > 200) {
            for(var j = 0; j < 10; j++) {
                console.log(j)
            }
            return;
        }
    }
 }

 //Bucle anidado

 // n filas, m columnas

 function matriz(n, m) {
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < m; j++) {
            console.log(i + ',' + j);
        }

    }
 }

//    0 1 2 3

 //0   1 2 3 4 
// 1   5 6 7 8
// 2   9 1 2 3

// 'i'   'j'
//  0     0
//  0     1
//  0     2
//  0     3
//  1     0
//  1     1
//  1     2 

//BUCLE WHILE, statement

while(unaCondicion) {
    //corre algun codigo
}

var i = 0;
while(i < 100) {
    console.log(i);
    i++;
}

//recordar: incrementar i, porque sino se hace un bucle infinito
// porque no cambia el numero, se va aimprimir siempre el mismo .

function matriz(n, m) {
    var j = 0;
    var i = 0;
    while(i < n) {
        while(j < m) {
            console.log(i, j);
            j = j + 1;
         }
        j = 0;
        i = i + 1;
    }
}

//error, no recorrio toda la matriz. que paso?
// j queda en su maximo valor, nosotros pusimos j = 3

//DIFERENCIAS: WHILE Y FOR

//En el for sabes, la condicion de parada. Por otro lado si no sabes la condicion de parada, estoy buscando una condicion que suceda
// pero no sabemos cuantas veces va a suceder.