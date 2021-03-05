// Condicionales (if/else):
// 1. Traductor Mundial
// Para este ejercicio en el inicio de tu código tienes que definir una variable idioma
// que puede contener el texto “en”, el texto “es” ,”de” o “fr”.
// Para probar el ejercicio vas a ir modificando ese valor y el resultado deberá ser
// diferente dependiendo de esa variable.
// a. El resultado del ejercicio debería imprimir en consola el mensaje “Hola
// Mundo ¡volvió JavaScript!” según el lenguaje definido.
// b. Plantea los condicionales necesarios para que tu código funcione
// correctamente.
// Por ejemplo si la variable es fr (francés) el código debería retornar:
// “Bonjour tout le mond, retour de JavaScript!”
// Probá el código con distintos idiomas.

let idioma = 'fr';

if (idioma == 'en') {
    console.log('Hello World! JavaScript is back!');
} else if(idioma == 'fr'){
    console.log('Bonjour tout le mond, rotour de Javascript!');
}else if(idioma == 'es'){
    console.log('Hola Mundo ¡Volvió Javascript');
}


// 2. Dia de la semana
// Para este ejercicio deberás plantear los condicionales necesarios para tener un
// saludo personalizado dependiendo del día de la semana.
// a. Definí la variable diaSemana. Tu trabajo será modificar esta variable y
// según el valor que contenga, el resultado del programa deberá ser diferente.

// b. Utiliza los condicionales if / else if / else para generar y retornar un mensaje
// personalizado a tu elección (cada día tiene que tener uno distinto)
// c. Probá el código modificando la variable diaSemana

let diaSemana = 'jueves';

if (diaSemana == 'lunes') {
    console.log('Hola! Como cuesta el lunes, no?');
}else if(diaSemana == 'martes'){
    console.log('Hola! Recien es martes?????');
}else if(diaSemana == 'miercoles'){
    console.log('Hola, vamos a la mitad che');
}else if(diaSemana == 'jueves'){
    console.log('Hola Juernes!');
}else if(diaSemana == 'viernes'){
    console.log('Arrrrrriba el viernes');
}else{
    console.log('Creo que ya es fin de semana');
}

// 3. Validaciones
// Algo muy común que utilizaremos a lo largo de la cursada son validaciones

// a. Definí una variable persona que será un objeto literal con las propiedades:
// i. nombre
// ii. apellido
// iii. edad
// iv. ciudad

// b. Escribí código que plasme la siguiente lógica:
// i. Si la persona es menor de edad y no tiene ciudad debe imprimirse el
// mensaje: “Hola NOMBRE APELLIDO criatura viajera!”
// ii. Si la persona es mayor de edad y no tiene ciudad se debe imprimir el
// mensaje: “Hola NOMBRE APELLIDO eminencia viajera!”
// iii. Si la persona es menor de edad y si tiene ciudad debe imprimirse el
// mensaje: “Hola mini NOMBRE APELLIDO de CIUDAD”
// iv. Si la persona es mayor de edad y si tiene ciudad debe imprimirse el
// mensaje: “Hola mayor NOMBRE APELLIDO de CIUDAD”
// v. Además de eso si la persona tiene un nombre que tenga menos de 4
// letras debe verse también el mensaje: “Ay pero que nombre cortito!”
// vi. Por último, si la persona es de la ciudad “Winterfell” debe imprimirse
// el mensaje “Winter is coming”

// c. Modificar la variable persona y probar el código para visualizar todas las
// opciones de los mensajes estipulados

let persona = {
    nombre:'Matias',
    apellido: 'Heber',
    edad: 25,
    ciudad: 'Winterfell'
};

if (persona.edad <= 18 && persona.ciudad == 'undefined') {
    console.log('Hola '+ persona.nombre +' '+ persona.apellido+ ' criatura viajera!');
} else if(persona.edad >=18 && persona.ciudad == 'undefined'){
    console.log('Hola '+ persona.nombre +' '+ persona.apellido+ ' eminencia viajera!');
} else if(persona.edad <=18 && persona.ciudad != 'undefined'){
    console.log('Hola '+ persona.nombre +' '+ persona.apellido+ ' de ' + persona.ciudad);
} 

if(persona.nombre.length < 4){
    console.log('Ay pero que nombre cortito');
}

if(persona.ciudad == 'Winterfell'){
    console.log('Winter is coming');
}



// Loops (for):
// 1. Tablas de multiplicación
// Para este ejercicio deberás imprimir la tabla de multiplicación pedida utilizando ciclos
// y generar un array con los resultados de multiplicar los valores del 1 al 10.
// a. Definí la variable base que contendrá un número. Definí también una variable
// resultados que sea un array vacío.
// b. Crea un for que recorra desde el 1 al 10 y en cada iteración multiplique por el
// número base.

// c. Cada resultado de la iteración del loop la variable resultados debe contener
// la tabla de multiplicar del número base. Por ejemplo, si base era 2,
// resultados debe ser [2,4,6,8,10,12,14,16,18,20]
// d. Imprimir el array resultados en consola.
// Prueba el código con distintos números base para asegurar que funciona
// correctamente.
// 2. Próximo destino
// a. Declara una variable destinos que guarde un array de strings con tu top 5
// destinos del mundo al que quisieras viajar próximamente.
// b. Recorre el array destinos e imprime en consola
// “Mi destino número es: destino”
// Donde número es el item del destino (1,2,3,4,5) y destino el elemento del
// array.
// 3. Notas alfabéticas.
// En este ejercicio deberás combinar condicionales con loops para asignar notas
// alfabéticas dependiendo de notas numéricas.
// Por ejemplo, una nota numérica de 80/100 equivale a una nota alfabética B.
// a. Definí la variable notas que tendrá un array con 10 números entre 0 y 100.
// b. Realiza un ciclo for que recorra esas notas y las imprima con el mensaje:
// “Nota: N” donde N es la nota en cuestión.
// c. Dentro del bucle haz un condicional que cumpla con las siguientes normas:
// i. Si una nota es mayor a 90 equivale debe imprimirse “Nota alfabética:
// A”
// ii. Si una nota es mayor a 80 equivale a una B y debe imprimirse “Nota
// alfabética: B”
// iii. Si una nota es mayor a 70 equivale a una C y debe imprimirse “Nota
// alfabética: C”
// iv. Si una nota es mayor a 65 equivale a una D y debe imprimirse “Nota
// alfabética: D”
// v. Cualquier nota por debajo de las anteriores equivale a una F y debe
// imprimirse “Nota alfabética: F”

// d. ¿Se te ocurre cómo hacer para generar más fácil un array de 100 notas y
// probar este código?

// 4. Chequeo de ganancias
// a. Crea la variable ganancias que contenga un array.

// i. Dentro del array define un objeto por cada mes.
// ii. Cada uno de los objetos deberá tener las propiedades mes y saldo.
// Mes será un número entre 1 y 12 y saldo serán un número que puede
// ser positivo o negativo

// b. Escribí un ciclo for que recorra el array ganancias.
// i. Imprimir un mensaje dentro del ciclo que diga “El mes N tuvo un saldo
// de XXXX” donde N y XXXX dependerá de los datos de la variable
// ii. Si un mes tuvo ganancia deberá imprimirse el mensaje “El mes N fue
// positivo”
// iii. Si un mes tuvo pérdida deberá imprimirse el mensaje “El mes N fue
// negativo”
// iv. Definir una variable “balance” que permita calcular el saldo total
// realizando la suma de los saldos de todos los meses e imprimirla en
// consola.
// v. Definir una variable cantidadPositivos que permita calcular cuántos
// meses tuvieron saldo positivo e imprimirla en consola.

// 5. Recorriendo personas
// Dada la siguiente variable:
// let personas = [
// {
// nombre: "Jon",
// apellido: "Snow",
// edad: 23,
// ciudad: "Winterfell"
// },
// {
// nombre: "Daenerys",
// apellido: "Targaryen",
// edad: 19
// },
// {
// nombre: "Arya",
// apellido: "Stark",
// edad: 12,
// ciudad: "Winterfell"
// },
// {

// nombre: "Tyrion",
// apellido: "Lannister",
// edad: 32,
// ciudad: "Casterly Rock"
// }
// ]

// Escribí el código que permita recorrer este array de personas y por cada una de ellas se
// realice la siguiente lógica:

// i. Si la persona es menor de edad y no tiene ciudad se debe imprimir el
// mensaje: “Hola NOMBRE APELLIDO criatura viajera!”
// ii. Si la persona es mayor de edad y no tiene ciudad se debe imprimir el
// mensaje: “Hola NOMBRE APELLIDO eminencia viajera!”
// iii. Si la persona es menor de edad y si tiene ciudad debe imprimirse el
// mensaje: “Hola mini NOMBRE APELLIDO de CIUDAD”
// iv. Si la persona es mayor de edad y si tiene ciudad debe imprimirse el
// mensaje: “Hola mayor NOMBRE APELLIDO de CIUDAD”
// v. Además de eso, si la persona tiene un nombre que tenga menos de 4
// letras debe verse también el mensaje: “Ay pero que nombre cortito!”
// vi. Por último, si la persona es de la ciudad “Winterfell” debe imprimirse
// el mensaje “Winter is coming”