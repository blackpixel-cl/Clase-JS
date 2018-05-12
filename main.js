/*var edad = 38;
var nombre = "Marcelo";
var enClases = true;
var und;
console.log (typeof edad);
console.log (typeof nombre);
console.log ("variable Boolean", enClases);
console.log ("variable undefined", und);*/

/*var num1 = 10;
var num2 = 2;

var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var div = num1 / num2;

console.log (div);*/

/*var num = 1;

console.log (num);
var num2 = ++num;
console.log(num2)*/

/*IGUALDAD*/

/*	var bool1 = true;
	var bool2 = false;

	console.log(bool1 === bool2);
	console.log(bool1 !== bool2);
	console.log(bool1 !== bool1);
	console.log(bool2 === bool2);
*/

/*COMPARACION*/
	
/*	var num1 = 10;
	var num2 = 20;

	console.log(num1 )*/

	/*operacion AND*/
	
/*	var num1 = 10;
	var num2 = 20;

	console.log( num1 < num2 && num2 > num1);*/

	/*OR debe cumplirse una condicion para que sea verdadera si no es FALSE*/
/*
	var num1 = 10;
	var num2 = 20;

	console.log( num1 < num2 || num2 > num1);*/


	/*CONDICIONALES*/
/*
	

	console.log( num1 < num2 ? 'si es verdadero' : 'no, es falso');*/




	/*IF y ELSE*/

/*
	var num1 = 10;
	var num2 = 20;

	if (num1 < num2 && num2 < num1) {

		console.log("se ejecuta");

	} else if (num1 < num2 || num1 > num2) {

		console.log("se ejecuta el if else if");

	} else {

		console.log ("no se ejecuta");
	}*/

	/*SWITCH*/

/*
	var num1 = 10;
	var num2 = 20;

	switch (num1 + num2){
		case 10:
		console.log("es igual a 10");
		break;

		case 20:
		console.log("es igual a 20");
		break;

		case 30:
		console.log("es igual a 30");
		break;

		default:
		console.log("es otro valor");
	}*/


	/*FUNCIONES*/



		/*function nombreCompleto (nombre, apellido){
				console.log(nombre + " " + apellido);
		}

		nombreCompleto("Marcelo", "Solis");*/


		function edad (nacimiento){
         return 2018 - nacimiento		}

		console.log(edad(2010));



		 var edadAnio = 1979;

		 switch (edad(edadAnio)) {
		 	case edad > 18:
		 	console.log(edad(edadAnio))
		 	console.log("es mayor");
		 	break;
		 	default:
		 	console.log("es menor");
		 	console.log(edad(edadAnio))

		 }